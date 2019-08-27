import React from 'react'
import moment from 'moment'

import { Hero } from '../components/hero'
import NumberFormat from 'react-number-format'

import { Flex, Box } from '@rebass/grid'
import styled from 'styled-components'
import { fonts, colors } from '../styles/vars'
import {Button} from '../components/buttons/linkText';

const Amount = styled.div`
  margin: auto;
  text-align: center;
 
 .dollar {
  font-size: 2rem;
  margin-right: 0.5rem;
  font-weight: 600;
  vertical-align: middle;
 }
 
 input {
   display: inline-block;
   border: none;  
   font-size: 5rem;
   font-weight: 200;
   vertical-align: middle;
   
   &:focus,
   &:active {
    outline: none;
   }
 }

  label {
    display: block;
  }
`

const Select = styled.select`
  margin: 0 10px;
  border: none;
  background: transparent;
  font-family: inherit;
  border-bottom: ${colors.primary} 2px solid;
  border-radius: 0;
  appearance: none;
  text-align: center;
  padding-bottom: 4px;
  
  &:focus,
  &:active {
    outline: none;
  }
`

class Give extends React.Component {

  state = {
    amount: "0.00",
    frequency: "once",
    amountWidth: 200
  }

  giveToPushPay = (e) => {
    e.preventDefault()

    const basePushPayUrl = "https://pushpay.com/g/secondchancechurch"
    let queryString = ""

    let queryVariables = []

    if (this.state.amount) {
      queryVariables.push(`a=${this.state.amount}`)
    }

    if (this.state.frequency && this.state.frequency !== 'once') {
      queryVariables.push(`r=${this.state.frequency}`)
    }

    if (this.state.firstName) {
      queryVariables.push(`ufn=`)
    }

    if (this.state.lastName) {
      queryVariables.push(`uln=`)
    }

    if (this.state.email) {
      queryVariables.push(`ue=`)
    }

    if (this.state.phone) {
      queryVariables.push(`up=`)
    }

    if (queryVariables.length > 0) {
      queryVariables.map((variable, i) => {
        queryString = `${queryString}${variable}${queryVariables.length - 1 !== i ? '&' : ''}`
      })
    }

    window.open(`${basePushPayUrl}${queryString.length ? '?' + queryString : ''}`, '_blank')
  }

  render() {
    return (
      <>
        <Hero
          heading="Give"
          image="https://images.unsplash.com/photo-1560252829-804f1aedf1be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=60"
        />
        <section>
          <form
            action=""
            onSubmit={this.giveToPushPay}
          >
            <div style={{ textAlign: 'center' }}>
              <Amount>
                <span className="dollar">$</span>
                <NumberFormat
                  value={this.state.amount}
                  allowNegative={false}
                  decimalScale={2}
                  isNumericString={true}
                  fixedDecimalScale={true}
                  thousandSeparator={true}
                  style={{ width: this.state.amountWidth, maxWidth: '90%', overflow: 'hidden' }}
                  onChange={(e) => this.setState({
                    amount: e.target.value,
                    amountWidth: e.target.scrollWidth
                  })}
                />
                {/*<label htmlFor="">Give</label>*/}
              </Amount>
              <div>
                <p>Give
                  <NumberFormat
                    value={this.state.amount}
                    prefix="$"
                    allowNegative={false}
                    displayType={"text"}
                    decimalScale={2}
                    isNumericString={true}
                    fixedDecimalScale={true}
                    thousandSeparator={true}
                    style={{
                      margin: '0 10px'
                    }}
                  />
                  <Select
                    name=""
                    id=""
                    onChange={(e) => this.setState({ frequency: e.target.value })}
                  >
                    <option value="once">one time</option>
                    <option value="Weekly">every week</option>
                    <option value="Fortnightly">every 2 weeks</option>
                    <option value="Monthly">every month</option>
                    <option value="FirstAndFifteenth">1st & 15th</option>
                  </Select>
                </p>
              </div>

              <Button type={'submit'}>Give Now</Button>
            </div>
          </form>
        </section>

      </>
    )
  }
}

export default Give
