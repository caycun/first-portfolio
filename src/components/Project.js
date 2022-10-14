function Project() {
    return (
        <div className="project-container">
            <ul>
               <Item
                   link="https://github.com/forumcord/forumcord" 
                   linktitle="forumcord/forumcord"
                   title="forumcord"
                   description="forumcord is an open-source discord bot where it saves the upcoming forum posts and comments and display it in a web browser."
                /> 
                 <Item
                    link="https://github.com/yle-l2c/text-counter"
                    linktitle="yle11777/text-counter"
                    title="text-counter"
                    description="A tool that counts characters, words, sentences and spaces with your given input and this is my very first react project."
                />
                <Item
                   link="https://github.com/yle11777/portfolio" 
                   linktitle="yle11777/portfolio"
                   title="portfolio"
                   description="The first portfolio that i made with ReactJS, CSS flexbox and love. Feel free to use this for your own but do not forget to give credits."
                />
            </ul>
        </div>
    );
}

const Item = ({ link, linktitle, title, description, language }) => {
    return (
        <li>
            <h2>{title}</h2>
            <p>{description}</p>
            <a href={link}>{linktitle}</a>
        </li>
    );
};

export default Project;


