import { DefaultTheme } from 'styled-components'

const Theme: DefaultTheme = {
  fonts: {
    title: '700 2.25rem/1 Poppins',
    listItemsDate: 'italic 300 1.5rem/1 Poppins',
    listItemsTitle: 'italic 400 1.5rem/1 Poppins',
    labelInput: '500 2.25rem/1 Poppins',
  },
  colors: {
    background: {
		  backgroundInput: '#f5f5f5',
			backgroundInputError: '#FFF5F5',
			backgroundInputCorrect: '#F0FFF4',
			backgroundTask: '#FAFAFA',
			backgroundButtonAdd: '#00CD00',
     	},
    borders: {
			borderTask: '#DDDDDD',
			borderInput: '#DDDDDD',
			borderInputError: '#F56565',
			borderInputCorrect: '#F0FFF4',
    	},
  },
  system: {
    radius: '10px'
  }
}

export default Theme