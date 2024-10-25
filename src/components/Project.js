function Project() {
    return (
        <div className="project-container">
            <ul>
                 <Item
                    link="https://github.com/caycun/text-counter"
                    linktitle="caycun/text-counter"
                    title="text-counter"
                    description="A tool that counts characters, words, sentences and spaces with your given input and this is my very first react project."
                />
                <Item
                    link="https://youtu.be/TBooOWEB7oQ?si=F2ajYiM9vF2uC-4Y"
                    linktitle="youtube/link"
                    title="rejoin tool using discord bot"
                    description="A rejoin tool controlled using a discord bot for UGPhone."
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


