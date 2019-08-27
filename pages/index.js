import React from 'react'

import { useQuery } from '@apollo/react-hooks'
import { GET_CONTENT } from '../queries'
import { NextSeo } from 'next-seo'

import { Flex, Box } from '@rebass/grid'

import { colors } from "../styles/vars"
import {Container} from "../layout/container"
import {Hero} from "../components/hero"
import ReactPlayer from 'react-player'

import styled from 'styled-components'

import {CurrentSeries} from '../components/currentSeries';
import {Campuses} from '../components/locations';
import {Button} from '../components/buttons/linkText';

const BackgroundItem = styled.div`
  background-color: ${props => props.color ? props.color : colors.lightSecondary};
  position: absolute;
  top: -3.5rem;
  bottom: -3.5rem;
  left: ${props  => props.reversed ? '-32px' : '3rem'};
  right: 0;
  z-index: -1;
  border-radius: 15px;
  
  @media (min-width: 769px) {
    right: ${props => props.reversed ? '3rem' : '-32px'};
  }
`

const Image = styled.div`
  width: calc(100% + 32px);
  padding-top: 50%;
  
  @media (min-width: 769px) {
    width: calc(50%);
    padding-top: 25%;
  }
`

const PlayerStyles = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  padding-top: 56.25%; /* 720 / 1280 = 0.5625 */
  box-sizing: border-box;
  margin-bottom: 4rem;
  border-radius: 15px;
  overflow: hidden;

  .react-player {
   position: absolute;
   top: 0;
   left: 0;
   color: rgb(177, 30, 35);
  }
`

const Page = (props) => {
  const { loading, error, data } = useQuery(GET_CONTENT, {
    variables: { slug: props.slug || 'homepage' }
  });

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return(
    <div>
      <NextSeo
        title={data.page.seo.title}
        description={data.page.seo.description}
        // canonical="https://www.canonical.ie/"
        openGraph={{
          // url: 'https://www.url.ie/a',
          title: data.page.seo.og.title,
          description: data.page.seo.og.description,
          images: [
            {
              url: data.page.seo.og.image.src,
              width: data.page.seo.og.image.width,
              height: data.page.seo.og.image.height,
              alt: data.page.seo.og.image.alt,
            }
          ],
          site_name: data.page.seo.og.siteName,
        }}
        twitter={{
          handle: data.page.seo.twitter.creator,
          site: data.page.seo.twitter.site,
          cardType: data.page.seo.twitter.card,
        }}
      />
      {/* Hero */}
      <Hero
        image={data.page.image}
        heading={data.page.heading || data.page.title}
        rotation={data.page.rotating}
        backgroundVideo={data.page.backgroundVideo}
      />

      {data.page.content.map((item, i) => {
        switch (item.__typename) {
          case 'Locations':
            return (
              <Campuses
                key={i}
                {...item}
              />
            )
          case 'CurrentSeries':
            return (
              <CurrentSeries
                key={i}
                {...item}
              />
            )
          case 'SideBySide':
            return (
              <section key={i}>
                <Container>
                  <Flex
                    flexWrap="wrap"
                    p={[3,5]}
                    style={{
                      backgroundColor: '#FF3300',
                      borderRadius: 15
                    }}
                  >
                    <Box width={1}>
                      <Flex
                        alignItems="center"
                        flexWrap={"wrap"}
                        flexDirection="row-reverse"
                        style={{ position: 'relative' }}
                      >
                        {/*<BackgroundItem color="#FF3300" reversed={true} />*/}
                          <Image
                            width={[1,1,6/12]}
                            style={{
                              backgroundImage: `url(${item.image})`,
                              backgroundRepeat: 'no-repeat',
                              backgroundSize: 'cover',
                              backgroundPosition: 'center',
                              // marginRight: '-32px',
                              borderRadius: 15
                            }}
                          />
                          <Box
                            width={[0,0,1/12]}
                            style={{ width: '8%' }}
                          />
                          <Box
                            width={[1,1,5/12]}
                            mt={[4,4,0]}
                            style={{ color: colors.lightPrimary }}
                          >
                            <h2>{item.heading}</h2>
                            <div dangerouslySetInnerHTML={{ __html: item.content }} />
                            {/*<Button outlined={true} light={true}>*/}
                            {/*  Learn More*/}
                            {/*</Button>*/}
                          </Box>
                        </Flex>
                      </Box>
                    </Flex>
                  </Container>
                </section>
            )
          case 'Video':
            return (
                <section key={i}>
                  <Container>
                    <Flex
                      flexWrap="wrap"
                      p={"4"}
                    >
                      <Box
                        width={[1,1,5/12]}
                      >
                        <h2>{item.heading}</h2>
                      </Box>
                      <Box
                        width={[0,0,1/12]}
                      />
                      <Box
                        width={[1,1,1/2]}
                        style={{ textAlign: 'center', margin: 'auto' }}
                      >
                        <PlayerStyles>
                          <ReactPlayer
                            url={item.video}
                            className='react-player'
                            width="100%"
                            height="100%"
                            config={{
                              wistia: {
                                options: {
                                  videoFoam: true,
                                  playerColor: colors.primary
                                }
                              }
                            }}
                          />
                        </PlayerStyles>
                      </Box>
                    </Flex>
                  </Container>
                </section>
            )
          case 'Body':
            return (
              <section key={i}>
                <Container>
                  <Flex
                    flexWrap="wrap"
                    flexDirection={item.headingPosition === 'right' ? 'row-reverse' : ''}
                    p={"4"}
                  >
                    {item.headingPosition !== 'hidden' &&
                    <>
                      <Box
                        width={[1,1,5/12]}
                        style={{
                          textAlign: item.headingPosition === 'right' ? 'right' : 'unset'
                        }}
                      >
                        <h2>{item.heading}</h2>
                      </Box>
                      <Box
                        width={[0,0,1/12]}
                      />
                    </>
                    }

                    <Box
                      width={[1,1, item.headingPosition === 'hidden' ? 2/3 : 1/2]}
                      style={{
                        margin: 'auto'
                      }}
                    >
                      <div dangerouslySetInnerHTML={{ __html: item.content }} />
                      {item.link &&
                        <Button
                          href={item.link.url}
                          target={item.link.target}
                        >
                          {item.link.text}
                        </Button>
                      }
                    </Box>
                  </Flex>
                </Container>
              </section>
            )
          }})}
    </div>
  )
}

Page.getInitialProps = async ({query: {slug}}) => {
  return { slug }
}

export default Page
//
// export default class Index extends React.Component {
//
//   static async getInitialProps({query: {slug}}) {
//     return { slug }
//   }
//
//   render() {
//     return (
//       <Query
//         query={gql`{
//           page(slug: "${this.props.slug || 'homepage'}") {
//             title
//             image
//             heading
//             rotating {
//                item
//             }
//             backgroundVideo
//             content {
//               ... on Locations {
//                 type
//                 heading
//                 image
//                 campuses {
//                   title
//                   physicalLocation
//                   address {
//                     street
//                     city
//                     state
//                     postalCode
//                   }
//                   serviceTimes {
//                     day
//                     time {
//                       date
//                       timezone
//                     }
//                   }
//                 }
//               }
//               ... on CurrentSeries {
//                 type
//                 series {
//                   title
//                   backgroundImage
//                   description
//                   branding {
//                     dark
//                     colors {
//                       type
//                       color
//                     }
//                   }
//                 }
//               }
//               ... on SideBySide {
//                 type
//                 heading
//                 content
//                 image
//               }
//               ... on Body {
//                 type
//                 heading
//                 headingPosition
//                 content
//               }
//             }
//           }
//         }`}
//       >
//         {({ loading, error, data }) => {
//           if (loading) return null
//           if (error) return null
//
//           return (
//       <div>
//         {/* Hero */}
//         <Hero
//           image={data.page.image}
//           heading={data.page.heading || data.page.title}
//           rotation={data.page.rotating}
//           backgroundVideo={data.page.backgroundVideo}
//         />
//
//         {/*<div>*/}
//         {/*  <VideoPlayer />*/}
//         {/*</div>*/}
//
//         {data.page.content.map((item, i) => {
//           switch (item.__typename) {
//             case 'Locations':
//               return (
//                 <Campuses
//                   key={i}
//                   {...item}
//                 />
//               )
//             case 'CurrentSeries':
//               return (
//                 <CurrentSeries
//                   key={i}
//                   {...item}
//                 />
//               )
//             case 'SideBySide':
//               return (
//                 <section key={i}>
//                   <Container>
//                     <Flex
//                       flexWrap="wrap"
//                       p={[2,5]}
//                       style={{
//                         backgroundColor: '#FF3300',
//                         borderRadius: 15
//                       }}
//                     >
//                       <Box width={1}>
//                         <Flex
//                             alignItems="center"
//                             flexWrap={"wrap"}
//                             flexDirection="row-reverse"
//                             style={{ position: 'relative' }}
//                         >
//                           {/*<BackgroundItem color="#FF3300" reversed={true} />*/}
//                           <Image
//                               width={[1,1,6/12]}
//                               style={{
//                                 backgroundImage: `url(${item.image})`,
//                                 backgroundRepeat: 'no-repeat',
//                                 backgroundSize: 'cover',
//                                 backgroundPosition: 'center',
//                                 // marginRight: '-32px',
//                                 borderRadius: 15
//                               }}
//                           />
//                           <Box width={[0,0,1/12]} style={{ width: '8%' }} />
//                           <Box
//                               width={[1,1,5/12]}
//                               // pt="4"
//                               // pb={[0,0,4]}
//                               // pl={[0,0,4]}
//                               // pr={"5"}
//                               style={{ color: colors.lightPrimary }}
//                           >
//                             <h2>{item.heading}</h2>
//                             <div dangerouslySetInnerHTML={{ __html: item.content }} />
//                             {/*<Button outlined={true} light={true}>*/}
//                             {/*  Learn More*/}
//                             {/*</Button>*/}
//                           </Box>
//                         </Flex>
//                       </Box>
//                     </Flex>
//                   </Container>
//                 </section>
//               )
//             case 'Body':
//               return (
//                 <section key={i}>
//                   <Container>
//                     <Flex
//                       flexWrap="wrap"
//                       flexDirection={item.headingPosition === 'right' ? 'row-reverse' : ''}
//                       p={"4"}
//                     >
//                       {item.headingPosition !== 'hidden' &&
//                         <>
//                           <Box
//                             width={[1,1,5/12]}
//                             style={{
//                               textAlign: item.headingPosition === 'right' ? 'right' : 'unset'
//                             }}
//                           >
//                             <h2>{item.heading}</h2>
//                           </Box>
//                           <Box
//                               width={[0,0,1/12]}
//                           />
//                         </>
//                       }
//
//                       <Box
//                         width={[1,1, item.headingPosition === 'hidden' ? 2/3 : 1/2]}
//                         dangerouslySetInnerHTML={{ __html: item.content }}
//                         style={{
//                           margin: 'auto'
//                         }}
//                       />
//                     </Flex>
//                   </Container>
//                 </section>
//               )
//           }
//         })}
//         {/* Service Times */}
//
//
//         {/* Current Series */}
//         {/*<CurrentSeries />*/}
//
//        {/*gKidz*/}
//
//
//         {/*<section>*/}
//         {/*  <Container flush>*/}
//         {/*    <Flex flexWrap="wrap" my={3}>*/}
//         {/*      <Box width={[1,1/3]} p={3}>*/}
//         {/*        <ImageCard*/}
//         {/*          heading={"Give"}*/}
//         {/*          image="https://images.unsplash.com/photo-1484344825633-f1a3d9927251?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"*/}
//         {/*        />*/}
//         {/*      </Box>*/}
//         {/*      <Box width={[1,1/3]} p={3}>*/}
//         {/*        <ImageCard*/}
//         {/*          heading={"Sermons"}*/}
//         {/*          image={"https://perrynoble-images.s3.amazonaws.com/secondchancechurch/DSC01690.jpg"}*/}
//         {/*        />*/}
//         {/*      </Box>*/}
//         {/*      <Box width={[1,1/3]} p={3}>*/}
//         {/*        <ImageCard*/}
//         {/*          heading={"Merch"}*/}
//         {/*          image={"https://perrynoble-images.s3.amazonaws.com/secondchancechurch/DSC02143.jpg"}*/}
//         {/*        />*/}
//         {/*      </Box>*/}
//         {/*    </Flex>*/}
//         {/*  </Container>*/}
//         {/*</section>*/}
//       </div>
//           )}}
//       </Query>
//     )
//   }
// }

// export default withRouter(Index)
