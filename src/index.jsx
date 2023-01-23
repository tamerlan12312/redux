import React from 'react';
import ReactDOM from 'react-dom/client';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import "../src/style/bootstrap.min.css"
import AppRouter from './router/AppRouter';

import configureStore from './store/configureStore';
import { addBlog } from './action/blogAction';
import { Provider } from 'react-redux';

const store = configureStore()

store.subscribe(
  ()=>{
    console.log(store.getState());

  }
)

store.dispatch(addBlog({img:"https://upload.wikimedia.org/wikipedia/en/7/77/Assassins_Creed_2_Box_Art.JPG",title:"Assassin's Creed 2",desc:"Assassin's Creed II is a 2009 action-adventure video game developed by Ubisoft Montréal and published by Ubisoft.[1] It is the second major installment in the Assassin's Creed series, and the sequel to 2007's Assassin's Creed. The game was first released on the PlayStation 3 and Xbox 360 in November 2009, and was later made available on Microsoft Windows in March 2010 and OS X in October 2010. Remastered versions of the game and its two sequels, Assassin's Creed: Brotherhood and Assassin's Creed: Revelations, were released as part of The Ezio Collection compilation for the PlayStation 4 and Xbox One on November 15, 2016, and for the Nintendo Switch on February 17, 2022",price:"$19.99"}))
store.dispatch(addBlog({img:"https://m.media-amazon.com/images/I/91lmTAVXgHL.jpg",title:"Assassin's creed Valhalla",desc:"Assassin's Creed Valhalla is a 2020 action role-playing video game developed by Ubisoft Montreal and published by Ubisoft. It is the twelfth major installment in the Assassin's Creed series, and the successor to 2018's Assassin's Creed Odyssey. Principally set in the years 872–878 AD, the game recounts a fictional story during the Viking expansions into the British Isles. Players control Eivor Varinsdottir, a Viking raider who, while attempting to establish a new Viking clan in England, becomes embroiled in the centuries-old conflict between the Assassin Brotherhood, who fight for peace and liberty, and the Templar Order, who desire peace through control.[c] The game also includes a framing stor",price:"$59.99"}))
store.dispatch(addBlog({img:"https://upload.wikimedia.org/wikipedia/en/4/4a/Assassin%27s_Creed_Origins_Cover_Art.png",title:"Assassins's Creed Origins",desc:"Assassin's Creed Origins is a 2017 action role-playing video game developed by Ubisoft Montreal and published by Ubisoft. It is the tenth major installment in the Assassin's Creed series, following 2015's Assassin's Creed Syndicate. Principally set in Egypt, near the end of the Ptolemaic period from 49 to 43 BC, the story follows a Medjay named Bayek of Siwa and his wife Aya as they seek revenge for the murder of their son, and explores the origins of the millennia-long conflict between the Hidden Ones—forerunners to the Assassin Brotherhood, and the Order of the Ancients—forerunners to the Templar Order. The framing story, set in the 21st century, follows a new character, Layla Hassan, who relives Bayek and Aya's memories using a modified Animus device.",price:"$99.99"}))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
<>
<Provider store={store}>
<AppRouter/>
</Provider>
</>
  
  );



