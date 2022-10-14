import { CgCPlusPlus } from "react-icons/cg";
import { SiPython, SiJavascript, SiReact, SiTypescript, SiExpress, SiCss3, SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

function Tools() {
    return (
        <>
            <Tool icon={<FaNodeJs />} />
            <Tool icon={<SiTypescript />} />
            <Tool icon={<SiJavascript />} />
            <Tool icon={<SiReact />} />
            <Tool icon={<SiCss3 />} />
            <Tool icon={<SiMongodb />} />
            <Tool icon={<SiExpress />} />
        </>
    );
}

const Tool = ({ icon }) => {
    return <div className="icon">{icon}</div>;
};

export default Tools;


