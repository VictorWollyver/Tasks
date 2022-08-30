// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: {
    	title: string;
      listItemsDate: string;
      listItemsTitle: string;
      labelInput: string;
    }
   	colors: {
  		background: {
				backgroundInput: string;
				backgroundInputError: string;
				backgroundInputCorrect: string;
				backgroundTask: string;
				backgroundButtonAdd: string;
     	},
    	borders: {
				borderTask: string;
				borderInput: string;
				borderInputError: string;
				borderInputCorrect: string;
    	},
   	}
   	system: {
    	radius: string
   	}
  }
}