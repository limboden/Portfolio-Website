
// const styles = {
//   flexContainer: {
//     display: flex,
//     flexWrap: wrap,
//   },
//   card: {
//     flex: '1 0 200px',
//     padding: '10px',
//     textAlign: 'center',
//     borderStyle: 'solid',
//     borderWidth: '1px',
//   }
// };

import ProjectCard from "../components/ProjectCard";





export default function Portfolio() {
  return (
    <div>
      <h2>Projects Page</h2>
      <section>
        <ProjectCard title="GG Central" description="GG Central is an app that allows a user to keep track of their games. Users can search for a game and add it to 3 separate columns; Games they want to play, games they're playing right now, or games they've completed. Users will also be able to see a list of comments under each game, with other users sharing their thoughts or ideas about the game!" link="./" repo="https://github.com/sameeridris/GG-Central" />
      </section>
      <section>
        <ProjectCard title="Moody" description="Moody is a React App that allows a user to curate a playlist based on their mood. Enter your current mood, or how you want to feel, and let our app create a playlist for you!" link="./" repo="https://github.com/keithrsialana/Moody" />
      </section>
      <section>
        <ProjectCard title="Money Buddy" description="Money Buddy is an app that allows users to enter their annual income and their various expenses, and the app will produce a pie chart that allows a user to see how much of their take home income is spent and how much is saved!" link="./" repo="https://github.com/limboden/Money-Buddy" />
      </section>
      <section>
        <ProjectCard title="Portfolio" description="Newer Portfolio website(This site!)" link="./" repo="https://github.com/limboden/limboden.github.io" />
      </section>
    </div>
  );
}
