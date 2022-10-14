import { GoMarkGithub, GoMail } from "react-icons/go";
import { IoLogoDiscord } from "react-icons/io5";

function SideBar() {
    return (
        <div className="sidebar-container">
            <div className="sidebar-item">
                <h5 className="vertical-text">yle</h5>
                <img src="https://media.discordapp.net/attachments/1028609775417700382/1030057344660406372/unknown.png" alt="pfp" />
            </div>
            <div className="sidebar-item">
                <h2>Links</h2>
                <div>
                    <div class="sidebar-second">
                        <SideBarIcon icon={<GoMarkGithub />} text="Github" link="https://github.com/yle11777" />
                        <SideBarIcon icon={<GoMail />} text="aikencunanan17@gmail.com" link="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSHwsLDKGBDlnzrczqfLHmHLnxwtXjkkRlScSMBGSMvgMkdcmhmdsjJbvcPNffTkRwLBLVSF" />
                        <SideBarIcon icon={<IoLogoDiscord />} text="yle#5882" link="" />
                    </div>
                </div>
            </div>
            <div className="sidebar-item">
                <h2>Favorite Anime</h2>
                <p>One piece, Hunter X Hunter, Naruto, Attack on Titan, Death Note, Code Geass</p>
            </div>
        </div>
    );
}

const SideBarIcon = ({ icon, text, link }) => {
    return (
        <div className="sidebar-icon">
            {icon}{" "}
            <a className="sidebar-link" href={link}>
                {text}
            </a>
        </div>
    );
};

export default SideBar;


