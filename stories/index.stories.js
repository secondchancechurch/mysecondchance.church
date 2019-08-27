import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs'

import { LinkText, Button } from '../components/buttons/linkText'
import { HorizontalCard } from "../components/card/horizontal"
import { Fonts } from "../styles/fonts"

import { Flex, Box } from '@rebass/grid'
import {ImageCard} from "../components/card/image"
import {AdUnit} from "../components/adUnit"

import {Hero} from "../components/hero";
import {AlternateHero} from "../components/hero/alternate"
import {Navigation} from '../components/navigation'
import {Footer} from '../layout/footer'

import jeffsum from 'jeffsum'

const stories = storiesOf('Storybook Knobs', module)
stories.addDecorator(withKnobs)

const heading = jeffsum(3, 'words')
const image = 'https://jeffsum.com/images/jeff_1.jpg'
const loremIpsum = jeffsum(240, 'characters')

storiesOf('Navigation', module)
    .add('Masthead', () => (
      <>
        <Fonts />
        <Navigation />
      </>
    ))

storiesOf('Buttons', module)
  .addDecorator(withKnobs({
    escapeHTML: false
  }))
  .add('Button', () => {
    return (
      <>
        <Fonts />
        <Button
          url={text('Url', '')}
          target={text('Target', '')}
          onClick={text('Button', `${() => alert('hello')}`)}
          filled={boolean('Filled', false)}
        >
          {text('Text', 'Learn More')}
        </Button>
      </>
    )
  })
  .add('Outlined Button', () => {
    return (
      <>
        <Fonts />
        <Button
            outlined={true}
            url={text('Url', '')}
            target={text('Target', '')}
            onClick={text('Button', `${() => alert('hello')}`)}
            filled={boolean('Filled', false)}
        >
          {text('Text', 'Learn More')}
        </Button>
      </>
    )
  })
  .add('Text Only', () => {
    return (
        <>
          <Fonts />
          <LinkText
              url={text('Url', '')}
              target={text('Target', '')}
              onClick={text('Button', `${() => alert('hello')}`)}
          >
            {text('Text', 'Learn More')}
          </LinkText>
        </>
    )
  })

storiesOf('Ad Unit', module)
    .addDecorator(withKnobs({
      escapeHTML: false
    }))
    .add('Default', () => (
      <>
        <Fonts/>
        <AdUnit
          align={select('Alignment', {Left: 'left', Center: 'center', Right: 'right'}, 'left')}
          heading={text('Heading', heading)}
          image={text('Image', image)}
          content={text('Content', `<p>${loremIpsum}</p>`)}
        />
      </>
    ))
    .add('Split', () => (
      <>
        <Fonts/>
        <AdUnit
          align={select('Alignment', {Left: 'left', Center: 'center', Right: 'right'}, 'left')}
          heading={text('Heading', heading)}
          image={text('Image', image)}
          content={text('Content', `<p>${loremIpsum}</p>`)}
          split={true}
        />
      </>
    ))

storiesOf('Hero', module)
    .add('Default', () => (
      <>
        <Fonts />
        <Hero
          image={'https://images.unsplash.com/photo-1508829040592-72f179f8a73f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'}
          heading={'A safe place for'}
        />
      </>
    ))
    .add('Alternate', () => (
      <>
        <Fonts/>
        <AlternateHero />
      </>
    ))


storiesOf('Card', module)
    .addDecorator(withKnobs({
      escapeHTML: false
    }))
    .add('Horizontal', () => (
      <>
        <Fonts />
        <HorizontalCard
          orientation={'horizontal'}
          heading={text('Heading', heading)}
          image={text('Image', image)}
          content={text('Content', `<p>${loremIpsum}</p>`)}
        />
      </>
    ))
    .add('Vertical', () => (
      <>
        <Fonts />
        <HorizontalCard
          orientation={'vertical'}
          heading={text('Heading', heading)}
          image={text('Image', image)}
          content={text('Content', `<p>${loremIpsum}</p>`)}
        />
      </>
    ))
    .add('Image', () => (
      <>
        <Fonts/>
        <ImageCard
          heading={text('Heading', heading)}
          image={text('Image', image)}
        />
      </>
    ))

storiesOf('Footer', module)
    .add('Default', () => (
        <>
          <Fonts/>
          <Footer/>
        </>
    ))

storiesOf('Typography', module)
    .add('Base', () => (
        <>
          <Fonts />
          <div style={{ maxWidth: 800, margin: 'auto'}}>
            <h1>The Earth The Starting Point</h1>
            <h2>All This, Surely, Was Good</h2>
            <h3>I Considered “Us” With Quiet Interest</h3>
            <h4>But Now Irrationally I Was Seized</h4>
            <h5>And Yet the Heart Praised</h5>
            <h6>Considered Even Without Reference to Our Belittling Cosmical Background</h6>

            <p>Windows, their curtains drawn, were shut eyes, inwardly watching the lives of dreams. Beyond the sea’s
              level darkness a lighthouse pulsed. Overhead, obscurity. I distinguished our own house, our islet in the
              tumultuous and bitter currents of the world. There, for a decade and a half, we two, so different in
              quality, had grown in and in to one another, for mutual support and nourishment, in intricate symbiosis.
              There daily we planned our several undertakings, and recounted the day’s oddities and vexations. There
              letters piled up to be answered, socks to be darned. There the children were born, those sudden new lives.
              There, under that roof, our own two lives, recalcitrant sometimes to one another, were all the while
              thankfully one, one larger, more <a
                  href="http://ebooks.adelaide.edu.au/s/stapledon/olaf/star/chapter1.html#chapter1">conscious
                life</a> than either alone.</p>

            <p>Yet there was bitterness. And bitterness not only invaded us from the world; it welled up also within our own magic circle. For horror at our futility, at our own unreality, and not only at the world’s delirium, had driven me out on to the hill.</p>

            <blockquote>
              <p>I reflected that not one of the visible features of this celestial and living gem revealed the presence
                of man. Displayed before me, though invisible, were some of the most congested centers of human
                population. There below me lay huge industrial regions, blackening the air with smoke. Yet all this
                thronging life and humanly momentous enterprise had made no mark whatever on the features of the planet.
                From this high look-out the Earth would have appeared no different before the dawn of man. No visiting
                angel, or explorer from another planet, could have guessed that this bland orb teemed with vermin, with
                world-mastering, self-torturing, incipiently angelic beasts. <small>— Olaf Stapledon, <cite
                    title="Star Maker">Star Maker</cite></small></p>
            </blockquote>

            <ul>
              <li>We had first met when she was a child</li>
              <li>Our eyes encountered</li>
              <li>She looked at me for a moment with quiet attention</li>
              <li>Even, I had romantically imagined, with obscure, deep-lying recognition
                <ul>
                  <li>I, at any rate, recognized in that look</li>
                  <li>So I persuaded myself in my fever of adolescence</li>
                </ul>
              </li>
              <li>My destiny</li>
            </ul>

            <ol>
              <li>The Diversity of Worlds</li>
              <li>Strange Mankinds</li>
              <li>Nautiloids</li>
              <li>The Earth
                <ul>
                  <li>The Starting Point</li>
                  <li>Earth Among the Stars</li>
                </ul>
              </li>
              <li>More Worlds</li>
            </ol>

            <p>Here's some code: <code>e = mc<sup>2</sup></code></p>

            <hr />

            <pre>
              <code>And
                Some
                Poetry
              </code>
            </pre>
          </div>

        </>
      ))
