// Import CopyRight CSS.............................
import './CopyRight.css'

// Import Footer Social Data........................
import { FootersLinksData } from '../../Data/Data'

export default function CopyRight() {
  return (
    <div className="footer-copyright">
        <div className="container copyright-container">
            <p>© 2024 Zapterify. All rights reserved.</p>
            <div className="footer-socials">
                {
                    FootersLinksData.socials.map((item, index) => {
                        return (
                        <a href={item.link} key={index}>
                            <item.icon />
                        </a>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}
