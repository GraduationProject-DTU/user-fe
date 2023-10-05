import './Blog.css'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate
} from "react-router-dom"
function Blog(){
    return(
        <div id='blog'>
            <div class='blog-menu'>
                <ul class="blog-menu-dad">
                    <li><a href="">tất cả</a></li>
                    <li><a href="">kiến thức</a></li>
                    <li><a href="">review</a></li>
                    <li><a href="">các chương trình</a></li>
                    <li><a href="">tâm sự mùi hương</a></li>
                </ul>
            </div>
            <div class="blog-list">
                    <div class="container">
                        <div class="row">
                        <div className="col-sm">
                            <Link to={"/blogdetails/"}>                          
                            <a href='#'>
                            <img src="https://xxivstore.com/wp-content/themes/yootheme/cache/70/duro-70abe648.webp" style={{width:"400px"}} alt="" />
                            <h2>XXIV Review – Nasomatto Duro – Don’t mess with me!</h2>
                            <p>Xịt vài shots Duro, tôi cảm thấy như mình được giữ ấm bằng một chiếc áo da bụi bặm, đang ngồi trên hiên của một ngôi nhà gỗ cũ kĩ giữa rừng..</p>
                            </a>
                            </Link>  
                        </div>
                        <div className="col-sm">
                            <a href='#'>
                            <img src="https://xxivstore.com/wp-content/themes/yootheme/cache/70/duro-70abe648.webp" style={{width:"400px"}} alt="" />
                            </a>
                        </div>
                        <div className="col-sm">
                            <a href='#'>
                            <img src="https://xxivstore.com/wp-content/themes/yootheme/cache/70/duro-70abe648.webp" style={{width:"400px"}} alt="" />
                            </a>
                        </div>
                        <div className="col-sm">
                            <a href='#'>
                            <img src="https://xxivstore.com/wp-content/themes/yootheme/cache/70/duro-70abe648.webp" style={{width:"400px"}} alt="" />
                            </a>
                        </div>
                        <div className="col-sm">
                            <a href='#'>
                            <img src="https://xxivstore.com/wp-content/themes/yootheme/cache/70/duro-70abe648.webp" style={{width:"400px"}} alt="" />
                            </a>
                        </div>
                        <div className="col-sm">
                            <a href='#'>
                            <img src="https://xxivstore.com/wp-content/themes/yootheme/cache/70/duro-70abe648.webp" style={{width:"400px"}} alt="" />
                            </a>
                        </div>
                    </div>
            </div>
        </div>
        </div>
    )
}
export default Blog