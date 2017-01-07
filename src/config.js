export const cloudServiceSetting = {
  firebase: true,
}

export const auth = process.env.NODE_ENV === 'production' ? {
  firebase: {
    apiKey: 'AIzaSyCZf9FTdh8ACb1fM---mcObAV7GVV1tF5Y',
    authDomain: 'mytemplate-b92b4.firebaseapp.com',
    databaseURL: 'https://mytemplate-b92b4.firebaseio.com',
    storageBucket: 'mytemplate-b92b4.appspot.com',
  },
} : {
  firebase: {
    apiKey: 'AIzaSyCZf9FTdh8ACb1fM---mcObAV7GVV1tF5Y',
    authDomain: 'mytemplate-b92b4.firebaseapp.com',
    databaseURL: 'https://mytemplate-b92b4.firebaseio.com',
    storageBucket: 'mytemplate-b92b4.appspot.com',
  },
}

export const storageKey = 'set_storage_key'
