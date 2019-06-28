import * as React from 'react';
import ProjectOverview from '../components/ProjectOverview';
import mainImg from '../img/mealplanner-main.png';

const MealPlanner: React.FC = () => {
  return (
    <ProjectOverview
      primaryColor="#d80000"
      secondaryColor="#eee"
      tagColor="#eee"
      title="MealPlanner - Calorie/Protein Tracking App"
      technologies={['HTML5', 'SCSS', 'BEM', 'JavaScript', 'Module Pattern']}
      mainImg={mainImg}
      codeLink="https://github.com/BillyLevin/mealplanner"
      demoLink="https://billylevin.github.io/mealplanner/"
    >
      <>
        <h3>Overview</h3>
        <p>
          MealPlanner is a web app built with vanilla JavaScript that allows the user to plan their
          daily meals while tracking protein and calorie intake. It was the first substantial app I
          created with JavaScript, and helped me to understand the cases where something like React
          would make development much easier.
        </p>
        <br />
        <h3>Project Features</h3>
        <ul>
          <li>Responsive design</li>
          <li>
            Uses local storage to keep track of all the necessary data for when the user revisits
            the page
          </li>
          <li>Built with the module design pattern in JavaScript</li>
        </ul>
        <br />
        <h3>Things I learned</h3>
        <ul>
          <li>
            As projects become more complex, simply using vanilla JavaScript becomes a lot more
            difficult. It made me realise how useful frameworks and libraries can be when it comes
            to JavaScript development
          </li>
          <li>How to make use of local storage to manipulate the DOM in JavaScript</li>
          <li>SCSS is amazing!</li>
        </ul>
      </>
    </ProjectOverview>
  );
};

export default MealPlanner;
