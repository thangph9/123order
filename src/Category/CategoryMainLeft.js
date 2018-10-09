import React from "react";
import { connect } from "react-redux";
class CategoryMainLeft extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: true,
            loading: false,
        }
    }
    render() {
        return (
            <div>
                <aside className="container-aside">
                    <section className="cate-sblock">
                        <div className="sblock-head">
                            <div className="sblock-title">Electronics</div>
                        </div>{/* .sblock-head */}
                        <div className="sblock-main">
                            <ul className="cate-list" style={{ paddingLeft: 0 }}>
                                <li>
                                    <a href="/us/s/cat/?fst=as:off&rh=n:172282,n:!493964,n:281407&bbn=493964&ie=UTF8&qid=1538963894&rnid=493964">
                                        <span className="title">Accessories &amp; Supplies</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/us/s/cat/?fst=as:off&rh=n:172282,n:!493964,n:502394&bbn=493964&ie=UTF8&qid=1538963894&rnid=493964">
                                        <span className="title">Camera &amp; Photo</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/us/s/cat/?fst=as:off&rh=n:172282,n:!493964,n:3248684011&bbn=493964&ie=UTF8&qid=1538963894&rnid=493964">
                                        <span className="title">Car &amp; Vehicle Electronics</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/us/s/cat/?fst=as:off&rh=n:172282,n:!493964,n:2811119011&bbn=493964&ie=UTF8&qid=1538963894&rnid=493964">
                                        <span className="title">Cell Phones &amp; Accessories</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/us/s/cat/?fst=as:off&rh=n:172282,n:!493964,n:541966&bbn=493964&ie=UTF8&qid=1538963894&rnid=493964">
                                        <span className="title">Computers &amp; Accessories</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/us/s/cat/?fst=as:off&rh=n:172282,n:!493964,n:2242348011&bbn=493964&ie=UTF8&qid=1538963894&rnid=493964">
                                        <span className="title">Electronics Warranties</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/us/s/cat/?fst=as:off&rh=n:172282,n:!493964,n:172526&bbn=493964&ie=UTF8&qid=1538963894&rnid=493964">
                                        <span className="title">GPS, Finders &amp; Accessories</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/us/s/cat/?fst=as:off&rh=n:172282,n:!493964,n:172541&bbn=493964&ie=UTF8&qid=1538963894&rnid=493964">
                                        <span className="title">Headphones</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/us/s/cat/?fst=as:off&rh=n:172282,n:!493964,n:667846011&bbn=493964&ie=UTF8&qid=1538963894&rnid=493964">
                                        <span className="title">Home Audio</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/us/s/cat/?fst=as:off&rh=n:172282,n:!493964,n:172574&bbn=493964&ie=UTF8&qid=1538963894&rnid=493964">
                                        <span className="title">Office Electronics</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/us/s/cat/?fst=as:off&rh=n:172282,n:!493964,n:172623&bbn=493964&ie=UTF8&qid=1538963894&rnid=493964">
                                        <span className="title">Portable Audio &amp; Video</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/us/s/cat/?fst=as:off&rh=n:172282,n:!493964,n:524136&bbn=493964&ie=UTF8&qid=1538963894&rnid=493964">
                                        <span className="title">Security &amp; Surveillance</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/us/s/cat/?fst=as:off&rh=n:172282,n:!493964,n:16285901&bbn=493964&ie=UTF8&qid=1538963894&rnid=493964">
                                        <span className="title">Service Plans</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/us/s/cat/?fst=as:off&rh=n:172282,n:!493964,n:1266092011&bbn=493964&ie=UTF8&qid=1538963894&rnid=493964">
                                        <span className="title">Television &amp; Video</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/us/s/cat/?fst=as:off&rh=n:172282,n:!493964,n:7926841011&bbn=493964&ie=UTF8&qid=1538963894&rnid=493964">
                                        <span className="title">Video Game Consoles &amp; Accessories</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/us/s/cat/?fst=as:off&rh=n:172282,n:!493964,n:300334&bbn=493964&ie=UTF8&qid=1538963894&rnid=493964">
                                        <span className="title">Video Projectors</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/us/s/cat/?fst=as:off&rh=n:172282,n:!493964,n:10048700011&bbn=493964&ie=UTF8&qid=1538963894&rnid=493964">
                                        <span className="title">Wearable Technology</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/us/s/cat/?fst=as:off&rh=n:172282,n:!493964,n:2642125011&bbn=493964&ie=UTF8&qid=1538963894&rnid=493964">
                                        <span className="title">eBook Readers &amp; Accessories</span>
                                    </a>
                                </li>
                            </ul>{/* .cate-list */}
                        </div>{/* .sblock-main */}
                    </section>{/* .cate-sblock */}
                    <section className="filter-sblock is-collapse">
                        <div className="sblock-head">
                            <div className="sblock-title">Amazon Certified</div>
                        </div>{/* .sblock-head */}
                        <div className="sblock-main">
                            <ul className="filter-list">
                                <li>
                                    <a href="/us/s/cat/?fst=as:off&rh=n:172282,p_n_amazon_certified:16741514011&bbn=172282&ie=UTF8&qid=1538963894&rnid=16741512011">
                                        <span className="icon" />
                                        <span className="title">Auto Replenishment</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/us/s/cat/?fst=as:off&rh=n:172282,p_n_amazon_certified:16741513011&bbn=172282&ie=UTF8&qid=1538963894&rnid=16741512011">
                                        <span className="icon" />
                                        <span className="title">Works with Alexa</span>
                                    </a>
                                </li>
                            </ul>{/* .filter-list */}
                        </div>{/* .sblock-main */}
                    </section>{/* .filter-sblock */}
                    <section className="filter-sblock is-collapse">
                        <div className="sblock-head">
                            <div className="sblock-title">Featured Brands</div>
                        </div>{/* .sblock-head */}
                        <div className="sblock-main">
                            <ul className="filter-list">
                                <li>
                                    <a href="/us/s/cat/?fst=as:off&rh=n:172282,p_89:Amazon&bbn=172282&ie=UTF8&qid=1538963894&rnid=2528832011">
                                        <span className="icon" />
                                        <span className="title">Amazon</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/us/s/cat/?fst=as:off&rh=n:172282,p_89:AmazonBasics&bbn=172282&ie=UTF8&qid=1538963894&rnid=2528832011">
                                        <span className="icon" />
                                        <span className="title">AmazonBasics</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/us/s/cat/?fst=as:off&rh=n:172282,p_89:Maxboost&bbn=172282&ie=UTF8&qid=1538963894&rnid=2528832011">
                                        <span className="icon" />
                                        <span className="title">Maxboost</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/us/s/cat/?fst=as:off&rh=n:172282,p_89:SquareTrade&bbn=172282&ie=UTF8&qid=1538963894&rnid=2528832011">
                                        <span className="icon" />
                                        <span className="title">SquareTrade</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/us/s/cat/?fst=as:off&rh=n:172282,p_89:AILUN&bbn=172282&ie=UTF8&qid=1538963894&rnid=2528832011">
                                        <span className="icon" />
                                        <span className="title">AILUN</span>
                                    </a>
                                </li>
                                <li className="is-hide  ">
                                    <a href="/us/s/cat/?fst=as:off&rh=n:172282,p_89:Mr+Shield&bbn=172282&ie=UTF8&qid=1538963894&rnid=2528832011">
                                        <span className="icon" />
                                        <span className="title">Mr Shield</span>
                                    </a>
                                </li>
                                <li className="is-hide  ">
                                    <a href="/us/s/cat/?fst=as:off&rh=n:172282,p_89:JETech&bbn=172282&ie=UTF8&qid=1538963894&rnid=2528832011">
                                        <span className="icon" />
                                        <span className="title">JETech</span>
                                    </a>
                                </li>
                            </ul>{/* .filter-list */}
                            <div className="view-more-btn">
                                <span className="icon" />
                                <span className="title">Xem thêm</span>
                            </div>
                        </div>{/* .sblock-main */}
                    </section>{/* .filter-sblock */}
                    <section className="filter-sblock is-collapse">
                        <div className="sblock-head">
                            <div className="sblock-title">Avg. Customer Review</div>
                        </div>{/* .sblock-head */}
                        <div className="sblock-main">
                            <ul className="filter-list">
                                <li>
                                    <a href="/us/s/cat/?fst=as:off&rh=n:172282,p_72:1248879011&bbn=172282&ie=UTF8&qid=1538963894&rnid=1248877011">
                                        <span className="icon" />
                                        <span className="title">4 Stars &amp; Up</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/us/s/cat/?fst=as:off&rh=n:172282,p_72:1248880011&bbn=172282&ie=UTF8&qid=1538963894&rnid=1248877011">
                                        <span className="icon" />
                                        <span className="title">3 Stars &amp; Up</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/us/s/cat/?fst=as:off&rh=n:172282,p_72:1248881011&bbn=172282&ie=UTF8&qid=1538963894&rnid=1248877011">
                                        <span className="icon" />
                                        <span className="title">2 Stars &amp; Up</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/us/s/cat/?fst=as:off&rh=n:172282,p_72:1248882011&bbn=172282&ie=UTF8&qid=1538963894&rnid=1248877011">
                                        <span className="icon" />
                                        <span className="title">1 Star &amp; Up</span>
                                    </a>
                                </li>
                            </ul>{/* .filter-list */}
                        </div>{/* .sblock-main */}
                    </section>{/* .filter-sblock */}
                    <section className="filter-sblock is-collapse">
                        <div className="sblock-head">
                            <div className="sblock-title">New &amp; Upcoming</div>
                        </div>{/* .sblock-head */}
                        <div className="sblock-main">
                            <ul className="filter-list">
                                <li>
                                    <a href="/us/s/cat/?fst=as:off&rh=n:172282,p_n_date:1249033011&bbn=172282&ie=UTF8&qid=1538963894&rnid=1249031011">
                                        <span className="icon" />
                                        <span className="title">New Arrivals</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/us/s/cat/?fst=as:off&rh=n:172282,p_n_date:1249034011&bbn=172282&ie=UTF8&qid=1538963894&rnid=1249031011">
                                        <span className="icon" />
                                        <span className="title">Coming Soon</span>
                                    </a>
                                </li>
                            </ul>{/* .filter-list */}
                        </div>{/* .sblock-main */}
                    </section>{/* .filter-sblock */}
                    <section className="filter-sblock is-collapse">
                        <div className="sblock-head">
                            <div className="sblock-title">Amazon Global Store</div>
                        </div>{/* .sblock-head */}
                        <div className="sblock-main">
                            <ul className="filter-list">
                                <li>
                                    <a href="/us/s/cat/?fst=as:off&rh=n:172282,p_n_global_store_origin_marketplace:16354393011&bbn=172282&ie=UTF8&qid=1538963894&rnid=16354392011">
                                        <span className="icon" />
                                        <span className="title">Amazon Global Store</span>
                                    </a>
                                </li>
                            </ul>{/* .filter-list */}
                        </div>{/* .sblock-main */}
                    </section>{/* .filter-sblock */}
                    <section className="filter-sblock is-collapse">
                        <div className="sblock-head">
                            <div className="sblock-title">Condition</div>
                        </div>{/* .sblock-head */}
                        <div className="sblock-main">
                            <ul className="filter-list">
                                <li >
                                    <a href="/us/s/cat/?fst=as:off&rh=n:172282,p_n_condition-type:2224371011&bbn=172282&ie=UTF8&qid=1538963894&rnid=2224369011">
                                        <span className="icon" />
                                        <span className="title">New</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/us/s/cat/?fst=as:off&rh=n:172282,p_n_condition-type:2224373011&bbn=172282&ie=UTF8&qid=1538963894&rnid=2224369011">
                                        <span className="icon" />
                                        <span className="title">Used</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/us/s/cat/?fst=as:off&rh=n:172282,p_n_condition-type:16907720011&bbn=172282&ie=UTF8&qid=1538963894&rnid=2224369011">
                                        <span className="icon" />
                                        <span className="title">Certified Refurbished</span>
                                    </a>
                                </li>
                            </ul>{/* .filter-list */}
                        </div>{/* .sblock-main */}
                    </section>{/* .filter-sblock */}
                    <section className="filter-sblock is-collapse">
                        <div className="sblock-head">
                            <div className="sblock-title">Price</div>
                        </div>{/* .sblock-head */}
                        <div className="sblock-main">
                            <ul className="filter-list">
                                <li >
                                    <a href="/us/s/cat/?fst=as:off&rh=n:172282,p_36:1253503011&bbn=172282&ie=UTF8&qid=1538963894&rnid=386442011">
                                        <span className="icon" />
                                        <span className="title">Under $25</span>
                                    </a>
                                </li>
                                <li >
                                    <a href="/us/s/cat/?fst=as:off&rh=n:172282,p_36:1253504011&bbn=172282&ie=UTF8&qid=1538963894&rnid=386442011">
                                        <span className="icon" />
                                        <span className="title">$25 to $50</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/us/s/cat/?fst=as:off&rh=n:172282,p_36:1253505011&bbn=172282&ie=UTF8&qid=1538963894&rnid=386442011">
                                        <span className="icon" />
                                        <span className="title">$50 to $100</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/us/s/cat/?fst=as:off&rh=n:172282,p_36:1253506011&bbn=172282&ie=UTF8&qid=1538963894&rnid=386442011">
                                        <span className="icon" />
                                        <span className="title">$100 to $200</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/us/s/cat/?fst=as:off&rh=n:172282,p_36:1253507011&bbn=172282&ie=UTF8&qid=1538963894&rnid=386442011">
                                        <span className="icon" />
                                        <span className="title">$200 &amp; Above</span>
                                    </a>
                                </li>
                            </ul>{/* .filter-list */}
                        </div>{/* .sblock-main */}
                    </section>{/* .filter-sblock */}
                    <section className="filter-sblock is-collapse">
                        <div className="sblock-head">
                            <div className="sblock-title">Seller</div>
                        </div>{/* .sblock-head */}
                        <div className="sblock-main">
                            <ul className="filter-list">
                                <li>
                                    <a href="/us/s/cat/?fst=as:off&rh=n:172282,p_6:ATVPDKIKX0DER&bbn=172282&ie=UTF8&qid=1538963894&rnid=303116011">
                                        <span className="icon" />
                                        <span className="title">Amazon.com</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/us/s/cat/?fst=as:off&rh=n:172282,p_6:A2L77EE7U53NWQ&bbn=172282&ie=UTF8&qid=1538963894&rnid=303116011">
                                        <span className="icon" />
                                        <span className="title">Amazon Warehouse</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/us/s/cat/?fst=as:off&rh=n:172282,p_6:A2R0FX412W1BDT&bbn=172282&ie=UTF8&qid=1538963894&rnid=303116011">
                                        <span className="icon" />
                                        <span className="title">BeachAudio</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/us/s/cat/?fst=as:off&rh=n:172282,p_6:A29PHU0KPCGV8S&bbn=172282&ie=UTF8&qid=1538963894&rnid=303116011">
                                        <span className="icon" />
                                        <span className="title">TheFactoryDepot</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/us/s/cat/?fst=as:off&rh=n:172282,p_6:A2Y7LLQC87RDQ&bbn=172282&ie=UTF8&qid=1538963894&rnid=303116011">
                                        <span className="icon" />
                                        <span className="title">JM PRIME</span>
                                    </a>
                                </li>
                                <li className="is-hide  ">
                                    <a href="/us/s/cat/?fst=as:off&rh=n:172282,p_6:A284PRV19Y1MTF&bbn=172282&ie=UTF8&qid=1538963894&rnid=303116011">
                                        <span className="icon" />
                                        <span className="title">IPC-Store  ✅</span>
                                    </a>
                                </li>
                                <li className="is-hide  ">
                                    <a href="/us/s/cat/?fst=as:off&rh=n:172282,p_6:ALYC2INPHZWA1&bbn=172282&ie=UTF8&qid=1538963894&rnid=303116011">
                                        <span className="icon" />
                                        <span className="title">biddeal_co</span>
                                    </a>
                                </li>
                                <li className="is-hide  ">
                                    <a href="/us/s/cat/?fst=as:off&rh=n:172282,p_6:A2I4D0WO1JEMBA&bbn=172282&ie=UTF8&qid=1538963894&rnid=303116011">
                                        <span className="icon" />
                                        <span className="title">BuyVPC</span>
                                    </a>
                                </li>
                                <li className="is-hide  ">
                                    <a href="/us/s/cat/?fst=as:off&rh=n:172282,p_6:A1XBPHGHAXLHDG&bbn=172282&ie=UTF8&qid=1538963894&rnid=303116011">
                                        <span className="icon" />
                                        <span className="title">SpaceBound</span>
                                    </a>
                                </li>
                                <li className="is-hide  ">
                                    <a href="/us/s/cat/?fst=as:off&rh=n:172282,p_6:A2YLYLTN75J8LR&bbn=172282&ie=UTF8&qid=1538963894&rnid=303116011">
                                        <span className="icon" />
                                        <span className="title">antonline</span>
                                    </a>
                                </li>
                            </ul>{/* .filter-list */}
                            <div className="view-more-btn">
                                <span className="icon" />
                                <span className="title">Xem thêm</span>
                            </div>
                        </div>{/* .sblock-main */}
                    </section>{/* .filter-sblock */}
                </aside>{/* .container-aside */}
            </div>

        )

    }
}
function mapStateToProps(state) {
    return {
        loadAdd: state.loadAdd
    }
}
const connectedHomePage = connect(mapStateToProps)(CategoryMainLeft);
export { connectedHomePage as CategoryMainLeft } 