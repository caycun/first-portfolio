import { FiAtSign, FiGithub } from "react-icons/fi";

function Footer() {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-item">
                    <SideBarIcon icon={<FiAtSign />} /> 2022 Yle_l2c. All rights.reserved.
                </div>
                <div className="footer-item"></div>
                <div className="footer-item">
                    <SideBarIcon icon={<FiGithub />} /> <a href="https://github.com/yle-l2c/portfolio">Source Code</a>
                </div>
            </div>
        </div>
    );
}

const SideBarIcon = ({ icon }) => {
    return <>{icon}</>;
};

export default Footer;


