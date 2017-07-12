import React, {Component} from 'react'
import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel'
import { green400, green600, blue400, blue600, red400, red600 } from 'material-ui/styles/colors'

class RewardsCarousel extends Component {

  constructor(props){
     super(props);
     this.state = {
         name:'rewards'
     }
  }
render(){
  return (
    <div>
    <AutoRotatingCarousel
            label="Get it!"
            open
          >
            <Slide
              media={<img src="http://lego.brickinstructions.com/75000/75174/001.jpg" />}
              mediaBackgroundStyle={{ backgroundColor: red400 }}
              contentStyle={{ backgroundColor: red600 }}
              title="Lego Star Wars"
              subtitle="35 points"
            />
            <Slide
              media={<img src="http://www.shefinds.com/files/2015/05/forever-21-kids.png" />}
              mediaBackgroundStyle={{ backgroundColor: blue400 }}
              contentStyle={{ backgroundColor: blue600 }}
              title="$20 at Forever 21"
              subtitle="30 points"
            />
            <Slide
              media={<img src="https://www.punchbowl.com/gridfs/fs/54b55304196c6f114900010a-1421169412" />}
              mediaBackgroundStyle={{ backgroundColor: green400 }}
              contentStyle={{ backgroundColor: green600 }}
              title="Chuck E. Cheese Pizza Party"
              subtitle="75 points"
            />
            <Slide
              media={<img src="https://images-na.ssl-images-amazon.com/images/I/41oXxNIEkZL._SY355_.jpg" />}
              mediaBackgroundStyle={{ backgroundColor: red400 }}
              contentStyle={{ backgroundColor: red600 }}
              title="Pencil Case"
              subtitle="5 points"
            />
            <Slide
              media={<img src="http://media.moddb.com/images/games/1/42/41925/fallout4-box.jpg" />}
              mediaBackgroundStyle={{ backgroundColor: blue400 }}
              contentStyle={{ backgroundColor: blue600 }}
              title="Video Game >$40"
              subtitle="60 points"
            />
            <Slide
              media={<img src="https://images-na.ssl-images-amazon.com/images/I/51Zh7gH41nL._SY355_.jpg" />}
              mediaBackgroundStyle={{ backgroundColor: green400 }}
              contentStyle={{ backgroundColor: green600 }}
              title="Fidget Spinner"
              subtitle="10 points"
            />
          </AutoRotatingCarousel>
        </div>
  )
}
}

export default RewardsCarousel;
