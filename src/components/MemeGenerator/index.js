/* eslint-disable jsx-a11y/label-has-associated-control */
import {Component} from 'react'

import {
  AppContainer,
  MainContainer,
  Heading,
  FormContainer,
  EnterUrl,
  SelectFont,
  ImageContainer,
  Text,
  Context,
  Label,
  Button,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here
class MemeGenerator extends Component {
  state = {
    imageUrl: '',
    topText: '',
    bottomText: '',
    fontSize: 8,
    isClicked: false,
  }

  onChangeImage = event => {
    this.setState({imageUrl: event.target.value})
  }

  onChangeTop = event => {
    this.setState({topText: event.target.value})
  }

  onChangeBottom = event => {
    this.setState({bottomText: event.target.value})
  }

  onChangeFontSize = event => {
    this.setState({fontSize: event.target.value})
  }

  onClickGenerate = () => {
    this.setState({isClicked: true}, this.renderData)
  }

  renderData = () => {
    const {imageUrl, topText, bottomText, fontSize} = this.state
    return (
      <ImageContainer src={imageUrl} data-testid="meme">
        <Context>
          <Text font={`${fontSize}px`}>{topText}</Text>
          <Text font={`${fontSize}px`}>{bottomText}</Text>
        </Context>
      </ImageContainer>
    )
  }

  render() {
    const {imageUrl, topText, bottomText, fontSize, isClicked} = this.state
    // console.log(`${imageUrl},${topText},${bottomText},${fontSize}`)

    return (
      <AppContainer>
        <MainContainer>
          <Heading>Meme Generator</Heading>
          <FormContainer data-testid="meme" er>
            <div>
              <Label htmlFor="url">Image URL</Label>
              <br />
              <EnterUrl
                type="text"
                placeholder="Enter The Image Url"
                onChange={this.onChangeImage}
                value={imageUrl}
                id="url"
                // value="https://assets.ccbp.in/frontend/react-js/nature-img.png"
              />
            </div>
            <div>
              <Label htmlFor="top">Top Text</Label>
              <br />
              <EnterUrl
                id="top"
                type="text"
                placeholder="Enter Top Text"
                onChange={this.onChangeTop}
                value={topText}
              />
            </div>
            <div>
              <Label htmlFor="bottom">Bottom Text</Label>
              <br />
              <EnterUrl
                id="bottom"
                type="text"
                placeholder="Enter Bottom Text"
                onChange={this.onChangeBottom}
                value={bottomText}
              />
            </div>
            <div>
              <Label htmlFor="font">Font Size</Label>
              <br />
              <SelectFont
                onChange={this.onChangeFontSize}
                value={fontSize}
                id="font"
              >
                {fontSizesOptionsList.map(each => (
                  <option key={each.optionId}>{each.displayText}</option>
                ))}
              </SelectFont>
            </div>
            <Button type="button" onClick={this.onClickGenerate}>
              Generate
            </Button>
          </FormContainer>
        </MainContainer>
        <>{isClicked && this.renderData()}</>
      </AppContainer>
    )
  }
}
export default MemeGenerator
