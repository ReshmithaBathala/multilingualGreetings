import {Component} from 'react'
import LanguageItem from './components/LanguageItem'
import LanguageImage from './components/LanguageImage'
import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class App extends Component {
  state = {
    activeLanguageId: languageGreetingsList[0].id,
  }

  displayGreeting = id => {
    this.setState({activeLanguageId: id})
  }

  displayFilteredLanguage = () => {
    const {activeLanguageId} = this.state
    const filteredList = languageGreetingsList.filter(
      each => each.id === activeLanguageId,
    )
    return filteredList
  }

  render() {
    const {activeLanguageId} = this.state
    const getFilteredList = this.displayFilteredLanguage()

    return (
      <div className="language-main-container">
        <h1 className="language-heading">Multilingual Greetings</h1>
        <ul className="language-btn-ul-container">
          {languageGreetingsList.map(eachLanguage => (
            <LanguageItem
              languageDetails={eachLanguage}
              key={eachLanguage.id}
              displayGreeting={this.displayGreeting}
              isActive={eachLanguage.id === activeLanguageId}
            />
          ))}
        </ul>
        <div className="image-container">
          {getFilteredList.map(each => (
            <LanguageImage imageDetails={each} key={each.id} />
          ))}
        </div>
      </div>
    )
  }
}

export default App
