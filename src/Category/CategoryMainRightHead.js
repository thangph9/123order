import React from "react";
import { connect } from "react-redux";
class CategoryMainRightHead extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: true,
            loading: false,
        }
    }
    render() {
        return (
            <div className="block-head">
                <div className="title-segment">
                    <div className="col-1">
                        <div className="block-title">
                            Electronics                                <span className="sub-desc">/ Tìm thấy 91,012 sản phẩm tại Fado.vn</span>
                        </div>
                    </div>
                    <div className="col-2">
                        <a className="prev-btn" />
                        <div className="page-panel">
                            <div className="panel-head">
                                Trang 1 trong 400                                      </div>
                            <div className="panel-main">
                                <ul className="page-list">
                                    <li><a href="/us/s/cat/?rh=n:172282&page=5">Trang 5</a></li>
                                    <li><a href="/us/s/cat/?rh=n:172282&page=10">Trang 10</a></li>
                                    <li><a href="/us/s/cat/?rh=n:172282&page=15">Trang 15</a></li>
                                    <li><a href="/us/s/cat/?rh=n:172282&page=20">Trang 20</a></li>
                                    <li><a href="/us/s/cat/?rh=n:172282&page=25">Trang 25</a></li>
                                    <li><a href="/us/s/cat/?rh=n:172282&page=30">Trang 30</a></li>
                                    <li><a href="/us/s/cat/?rh=n:172282&page=35">Trang 35</a></li>
                                    <li><a href="/us/s/cat/?rh=n:172282&page=40">Trang 40</a></li>
                                    <li><a href="/us/s/cat/?rh=n:172282&page=45">Trang 45</a></li>
                                    <li><a href="/us/s/cat/?rh=n:172282&page=50">Trang 50</a></li>
                                    <li><a href="/us/s/cat/?rh=n:172282&page=55">Trang 55</a></li>
                                    <li><a href="/us/s/cat/?rh=n:172282&page=60">Trang 60</a></li>
                                    <li><a href="/us/s/cat/?rh=n:172282&page=65">Trang 65</a></li>
                                    <li><a href="/us/s/cat/?rh=n:172282&page=70">Trang 70</a></li>
                                    <li><a href="/us/s/cat/?rh=n:172282&page=75">Trang 75</a></li>
                                    <li><a href="/us/s/cat/?rh=n:172282&page=80">Trang 80</a></li>
                                    <li><a href="/us/s/cat/?rh=n:172282&page=85">Trang 85</a></li>
                                    <li><a href="/us/s/cat/?rh=n:172282&page=90">Trang 90</a></li>
                                    <li><a href="/us/s/cat/?rh=n:172282&page=95">Trang 95</a></li>
                                    <li><a href="/us/s/cat/?rh=n:172282&page=100">Trang 100</a></li>
                                    <li><a href="/us/s/cat/?rh=n:172282&page=105">Trang 105</a></li>
                                    <li><a href="/us/s/cat/?rh=n:172282&page=110">Trang 110</a></li>
                                    <li><a href="/us/s/cat/?rh=n:172282&page=115">Trang 115</a></li>
                                    <li><a href="/us/s/cat/?rh=n:172282&page=120">Trang 120</a></li>
                                    <li><a href="/us/s/cat/?rh=n:172282&page=125">Trang 125</a></li>
                                    <li><a href="/us/s/cat/?rh=n:172282&page=130">Trang 130</a></li>
                                    <li><a href="/us/s/cat/?rh=n:172282&page=135">Trang 135</a></li>
                                    <li><a href="/us/s/cat/?rh=n:172282&page=140">Trang 140</a></li>
                                    <li><a href="/us/s/cat/?rh=n:172282&page=145">Trang 145</a></li>
                                    <li><a href="/us/s/cat/?rh=n:172282&page=150">Trang 150</a></li>
                                    <li><a href="/us/s/cat/?rh=n:172282&page=155">Trang 155</a></li>
                                    <li><a href="/us/s/cat/?rh=n:172282&page=160">Trang 160</a></li>
                                    <li><a href="/us/s/cat/?rh=n:172282&page=165">Trang 165</a></li>
                                    <li><a href="/us/s/cat/?rh=n:172282&page=170">Trang 170</a></li>
                                    <li><a href="/us/s/cat/?rh=n:172282&page=175">Trang 175</a></li>
                                    <li><a href="/us/s/cat/?rh=n:172282&page=180">Trang 180</a></li>
                                    <li><a href="/us/s/cat/?rh=n:172282&page=185">Trang 185</a></li>
                                    <li><a href="/us/s/cat/?rh=n:172282&page=190">Trang 190</a></li>
                                    <li><a href="/us/s/cat/?rh=n:172282&page=195">Trang 195</a></li>
                                    <li><a href="/us/s/cat/?rh=n:172282&page=200">Trang 200</a></li>
                                    <li><a href="/us/s/cat/?rh=n:172282&page=205">Trang 205</a></li>
                                    <li><a href="/us/s/cat/?rh=n:172282&page=210">Trang 210</a></li>
                                    <li><a href="/us/s/cat/?rh=n:172282&page=215">Trang 215</a></li>
                                    <li><a href="/us/s/cat/?rh=n:172282&page=220">Trang 220</a></li>
                                    <li><a href="/us/s/cat/?rh=n:172282&page=225">Trang 225</a></li>
                                    <li><a href="/us/s/cat/?rh=n:172282&page=230">Trang 230</a></li>
                                    <li><a href="/us/s/cat/?rh=n:172282&page=235">Trang 235</a></li>
                                    <li><a href="/us/s/cat/?rh=n:172282&page=240">Trang 240</a></li>
                                    <li><a href="/us/s/cat/?rh=n:172282&page=245">Trang 245</a></li>
                                    <li><a href="/us/s/cat/?rh=n:172282&page=250">Trang 250</a></li>
                                    <li><a href="/us/s/cat/?rh=n:172282&page=255">Trang 255</a></li>
                                    <li><a href="/us/s/cat/?rh=n:172282&page=260">Trang 260</a></li>
                                    <li><a href="/us/s/cat/?rh=n:172282&page=265">Trang 265</a></li>
                                    <li><a href="/us/s/cat/?rh=n:172282&page=270">Trang 270</a></li>
                                    <li><a href="/us/s/cat/?rh=n:172282&page=275">Trang 275</a></li>
                                    <li><a href="/us/s/cat/?rh=n:172282&page=280">Trang 280</a></li>
                                    <li><a href="/us/s/cat/?rh=n:172282&page=285">Trang 285</a></li>
                                    <li><a href="/us/s/cat/?rh=n:172282&page=290">Trang 290</a></li>
                                    <li><a href="/us/s/cat/?rh=n:172282&page=295">Trang 295</a></li>
                                    <li><a href="/us/s/cat/?rh=n:172282&page=300">Trang 300</a></li>
                                    <li><a href="/us/s/cat/?rh=n:172282&page=305">Trang 305</a></li>
                                    <li><a href="/us/s/cat/?rh=n:172282&page=310">Trang 310</a></li>
                                    <li><a href="/us/s/cat/?rh=n:172282&page=315">Trang 315</a></li>
                                    <li><a href="/us/s/cat/?rh=n:172282&page=320">Trang 320</a></li>
                                    <li><a href="/us/s/cat/?rh=n:172282&page=325">Trang 325</a></li>
                                    <li><a href="/us/s/cat/?rh=n:172282&page=330">Trang 330</a></li>
                                    <li><a href="/us/s/cat/?rh=n:172282&page=335">Trang 335</a></li>
                                    <li><a href="/us/s/cat/?rh=n:172282&page=340">Trang 340</a></li>
                                    <li><a href="/us/s/cat/?rh=n:172282&page=345">Trang 345</a></li>
                                    <li><a href="/us/s/cat/?rh=n:172282&page=350">Trang 350</a></li>
                                    <li><a href="/us/s/cat/?rh=n:172282&page=355">Trang 355</a></li>
                                    <li><a href="/us/s/cat/?rh=n:172282&page=360">Trang 360</a></li>
                                    <li><a href="/us/s/cat/?rh=n:172282&page=365">Trang 365</a></li>
                                    <li><a href="/us/s/cat/?rh=n:172282&page=370">Trang 370</a></li>
                                    <li><a href="/us/s/cat/?rh=n:172282&page=375">Trang 375</a></li>
                                    <li><a href="/us/s/cat/?rh=n:172282&page=380">Trang 380</a></li>
                                    <li><a href="/us/s/cat/?rh=n:172282&page=385">Trang 385</a></li>
                                    <li><a href="/us/s/cat/?rh=n:172282&page=390">Trang 390</a></li>
                                    <li><a href="/us/s/cat/?rh=n:172282&page=395">Trang 395</a></li>
                                    <li><a href="/us/s/cat/?rh=n:172282&page=400">Trang 400</a></li>
                                </ul>{/* .page-list */}
                            </div>
                        </div>{/* .page-panel */}
                        <a className="next-btn" href="/us/s/cat/?rh=n:172282&page=10&ie=UTF8&qid=1538963894" />
                    </div>
                </div>{/* .title-segment */}
                <div className="sort-segment">
                    <div className="col-1">
                        Sắp xếp:
        </div>
                    <div className="col-2">
                        <div className="filter-list-outer">
                            <ul className="filter-list" style={{ padding: '0px 0px 3px 0px', margin: 0 }}>
                                <li className="is-active"><a href="/us/s/cat/?rh=n:172282&sort=featured-rank&ie=UTF8&qid=1538963894">Nổi bật nhất</a></li>
                                <li ><a href="/us/s/cat/?rh=n:172282&sort=price-asc-rank&ie=UTF8&qid=1538963894">Giá từ thấp đến cao</a></li>
                                <li ><a href="/us/s/cat/?rh=n:172282&sort=price-desc-rank&ie=UTF8&qid=1538963894">Giá từ cao đến thấp</a></li>
                                <li ><a href="/us/s/cat/?rh=n:172282&sort=review-rank&ie=UTF8&qid=1538963894">Nhiều người đánh giá</a></li>
                            </ul>{/* .filter-list */}
                        </div>
                    </div>{/* .col--2 */}
                </div>{/* .sort-segment */}
            </div>
        )

    }
}
function mapStateToProps(state) {
    return {
        loadAdd: state.loadAdd
    }
}
const connectedHomePage = connect(mapStateToProps)(CategoryMainRightHead);
export { connectedHomePage as CategoryMainRightHead } 