
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
      <h1>Projects Page</h1>
      <section>
        <ProjectCard title="Portfolio" description="Newer Portfolio website(This site!)" link="./" repo="https://github.com/limboden/limboden.github.io" />
      </section>
      <section>
        <ProjectCard title="Old Portfolio" description="My Very First Portfolio" link="https://limboden.github.io" repo="https://github.com/limboden/limboden.github.io" />
      </section>
      <section>
        <ProjectCard title="Portfolio" description="Newer Portfolio website(This site!)" link="./" repo="https://github.com/limboden/limboden.github.io" />
      </section>
      <section>
        <ProjectCard title="Portfolio" description="Newer Portfolio website(This site!)" link="./" repo="https://github.com/limboden/limboden.github.io" />
      </section>
      <section>
        <ProjectCard title="Portfolio" description="Newer Portfolio website(This site!)" link="./" repo="https://github.com/limboden/limboden.github.io" />
      </section>
      <section>
        <ProjectCard title="Portfolio" description="Newer Portfolio website(This site!)" link="./" repo="https://github.com/limboden/limboden.github.io" />
      </section>
    </div>
  );
}
