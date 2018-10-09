import React from "react";
import { connect } from "react-redux";
class Content extends React.Component{
    constructor(props){
        super(props);
        this.state={
            login: true,
            loading: false,
        }
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit(){
        this.setState({
            login: false
        })
        console.log("Hello World")
    }
    render(){
        
        return (
                <div className="body-category">
  <section id="breadcrumbs-block-v2" className="breadcrumbs-block-v2" style={{marginBottom: 30}}>
    <div className="container-fedo" itemScope="itemscope" itemType="http://schema.org/BreadcrumbList" style={{padding: 0, height: 33}}>
      <ul style={{padding: 0, marginBottom: 0}} className="link-list" itemProp="itemListElement" itemScope="itemscope" itemType="http://schema.org/ListItem">
        <li><a href="https://fado.vn" itemProp="item"><span itemProp="name">Trang chủ</span></a></li>
        <li className="break" />
        <li><a href="/us/amazon-store/" itemProp="item"><span itemProp="name">Amazon Mỹ</span></a></li>
        <li className="break" />
        <li className="is-active">
          <a itemProp="item">
            <span itemProp="name">Electronics</span>
          </a>
          <meta itemProp="position" content={1} />
        </li>
        <li className="break" />
      </ul>
      <form className="search-form" id="search-cate">
        <input type="search" id="keyword-input-index" defaultValue="" className="keyword-input keyword-txt" placeholder="Tìm kiếm trong danh mục..." />
        <button type="button" id="search-btn-index" className="submit-btn search-btn-cate" data-lang="us" data-rh="n:172282" />
      </form>
    </div>{/* .container */}
  </section> {/* end section*/}
  <div className="cate-container-v2 container" style={{padding: 0}}>
    <aside className="container-aside">
      <section className="cate-sblock">
        <div className="sblock-head">
          <div className="sblock-title">Electronics</div>
        </div>{/* .sblock-head */}
        <div className="sblock-main">
          <ul className="cate-list" style={{paddingLeft: 0}}>
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
    <div className="container-col">
      <section id="category-block-v2" className="category-block-v2">
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
                <ul className="filter-list" style={{padding: '0px 0px 3px 0px', margin: 0}}>
                  <li className="is-active"><a href="/us/s/cat/?rh=n:172282&sort=featured-rank&ie=UTF8&qid=1538963894">Nổi bật nhất</a></li>
                  <li ><a href="/us/s/cat/?rh=n:172282&sort=price-asc-rank&ie=UTF8&qid=1538963894">Giá từ thấp đến cao</a></li>
                  <li ><a href="/us/s/cat/?rh=n:172282&sort=price-desc-rank&ie=UTF8&qid=1538963894">Giá từ cao đến thấp</a></li>
                  <li ><a href="/us/s/cat/?rh=n:172282&sort=review-rank&ie=UTF8&qid=1538963894">Nhiều người đánh giá</a></li>
                </ul>{/* .filter-list */}
              </div>
            </div>{/* .col--2 */}
          </div>{/* .sort-segment */}
        </div>
        <div className="block-main">
          <div className="wrap-product-col-v2">
            <div className="product-col">
              <div className="panel-product-v2 js-get-product-to-asin-us is-checked" id="panel-product" data-asin="B00ZV9RDKK">
                <div className="panel-inner" temprop="item" itemScope="itemscope" itemType="http://schema.org/Product">
                  <a className="img-pane href" itemProp="url" href="/us/fire-tv-stick-with-alexa-voice-remote-1st-gen-streaming-media-player-B00ZV9RDKK.html">
                    <div className="pane-inner">
                      <img className="pd-img img-lazy" src="https://images-na.ssl-images-amazon.com/images/I/31CO38sRgDL._AC_SL_QL70_.jpg" data-src="https://images-na.ssl-images-amazon.com/images/I/31CO38sRgDL._AC_SL_QL70_.jpg" data-sub-src="https://images-na.ssl-images-amazon.com/images/I/31CO38sRgDL._AC_SL_QL70_.jpg" alt="img" />
                    </div>
                  </a>{/* .img-pane */}
                  <div className="meta-pane">
                    <div className="col-1">
                      <div className="star" itemProp="aggregateRating" itemScope itemType="http://schema.org/AggregateRating">
                        <i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star-half-empty  text-yellow" />                                              </div>
                      <div className="comment-fedo">198987 bình luận</div>
                    </div>
                    <div className="col-2">
                      <div className="web">
                        <i className="si si-flag-us-circle-16" /> <span className="title">Từ Mỹ</span>
                      </div>
                    </div>
                  </div>{/* .meta-field */}
                  <a className="pd-title href" href="/us/fire-tv-stick-with-alexa-voice-remote-1st-gen-streaming-media-player-B00ZV9RDKK.html"><span className="title-inner">Fire TV Stick with Alexa Voice Remote (1st Gen), streaming media player</span></a>
                  <div className="price" itemProp="offers" itemScope="itemscope" itemType="http://schema.org/Offer">
                    <div className="curr-price totalPrice" itemProp="price" content="Under $25">1,253,285<sup>đ</sup></div>
                    <div className="old-price" />
                  </div>
                  <div className="price-alert">* Giá trọn gói về Việt Nam</div>
                  <div className="ext-pane">
                    <div className="order-time-field" style={{display: 'none'}} />
                    <div className="feature-field">
                      <ul className="feature-list">
                        <li>Nhập khẩu chính ngạch</li>
                        <li>Bảo vệ người mua, giảm thiểu rủi ro</li>
                        <li>Giao hàng tận nhà, không lo thủ tục</li>
                      </ul>
                    </div>{/* .feature-field */}
                    <div className="merchant-field">
                      Người bán: <span className="name">Amazon.com</span>
                    </div>
                    <div className="control-field">
                      <a className="btn btn-grd-border btn-xs btn-pill quick-view-btn" href="javascript:;" data-asin="B00ZV9RDKK" data-merchantid="ATVPDKIKX0DER" data-lang="us" data-url="/Amazon-Fire-TV-Stick-With-Alexa-Voice-Remote-Streaming-Media-Player/dp/B00ZV9RDKK/ref=sr_1_2?s=electronics&ie=UTF8&qid=1538963894&sr=1-2"><div className="btn-inner">Xem nhanh</div></a>
                      <a className="btn btn-grd-bg btn-xs btn-pill detail-view-btn" href="/us/fire-tv-stick-with-alexa-voice-remote-1st-gen-streaming-media-player-B00ZV9RDKK.html"><div className="btn-inner">Xem chi tiết</div></a>
                    </div>
                  </div>{/* .ext-pane */}
                </div>{/* .panel-inner */}
              </div>{/* .panel-product-v2*/}
            </div>{/* .product-col */}
            <div className="product-col">
              <div className="panel-product-v2 js-get-product-to-asin-us is-checked" id="panel-product" data-asin="B01DFKC2SO">
                <div className="panel-inner" temprop="item" itemScope="itemscope" itemType="http://schema.org/Product">
                  <a className="img-pane href" itemProp="url" href="/us/echo-dot-2nd-generation-smart-speaker-with-alexa-black-B01DFKC2SO.html">
                    <div className="pane-inner">
                      <img className="pd-img img-lazy" src="https://images-na.ssl-images-amazon.com/images/I/41iz5Tw82IL._AC_SL_QL70_.jpg" data-src="https://images-na.ssl-images-amazon.com/images/I/41iz5Tw82IL._AC_SL_QL70_.jpg" data-sub-src="https://images-na.ssl-images-amazon.com/images/I/41iz5Tw82IL._AC_SL_QL70_.jpg" alt="img" />
                    </div>
                    <span className="sale-tag">-20%</span></a>{/* .img-pane */}
                  <div className="meta-pane">
                    <div className="col-1">
                      <div className="star" itemProp="aggregateRating" itemScope itemType="http://schema.org/AggregateRating">
                        <i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star-half-empty  text-yellow" />                                              </div>
                      <div className="comment-fedo">118164 bình luận</div>
                    </div>
                    <div className="col-2">
                      <div className="web">
                        <i className="si si-flag-us-circle-16" /> <span className="title">Từ Mỹ</span>
                      </div>
                    </div>
                  </div>{/* .meta-field */}
                  <a className="pd-title href" href="/us/echo-dot-2nd-generation-smart-speaker-with-alexa-black-B01DFKC2SO.html"><span className="title-inner">Echo Dot (2nd Generation) - Smart speaker with Alexa - Black</span></a>
                  <div className="price" itemProp="offers" itemScope="itemscope" itemType="http://schema.org/Offer">
                    <div className="curr-price totalPrice" itemProp="price" content="Under $25">1,284,307<sup>đ</sup></div>
                    <div className="old-price">1,541,168<sup>đ</sup></div>
                  </div>
                  <div className="price-alert">* Giá trọn gói về Việt Nam</div>
                  <div className="ext-pane">
                    <div className="order-time-field" style={{display: 'none'}} />
                    <div className="feature-field">
                      <ul className="feature-list">
                        <li>Nhập khẩu chính ngạch</li>
                        <li>Bảo vệ người mua, giảm thiểu rủi ro</li>
                        <li>Giao hàng tận nhà, không lo thủ tục</li>
                      </ul>
                    </div>{/* .feature-field */}
                    <div className="merchant-field">
                      Người bán: <span className="name">Amazon.com</span>
                    </div>
                    <div className="control-field">
                      <a className="btn btn-grd-border btn-xs btn-pill quick-view-btn" href="javascript:;" data-asin="B01DFKC2SO" data-merchantid="ATVPDKIKX0DER" data-lang="us" data-url="/Amazon-Echo-Dot-Portable-Bluetooth-Speaker-with-Alexa-Black/dp/B01DFKC2SO/ref=sr_1_3?s=electronics&ie=UTF8&qid=1538963894&sr=1-3"><div className="btn-inner">Xem nhanh</div></a>
                      <a className="btn btn-grd-bg btn-xs btn-pill detail-view-btn" href="/us/echo-dot-2nd-generation-smart-speaker-with-alexa-black-B01DFKC2SO.html"><div className="btn-inner">Xem chi tiết</div></a>
                    </div>
                  </div>{/* .ext-pane */}
                </div>{/* .panel-inner */}
              </div>{/* .panel-product-v2*/}
            </div>{/* .product-col */}
            <div className="product-col">
              <div className="panel-product-v2 js-get-product-to-asin-us is-checked" id="panel-product" data-asin="B01N32NCPM">
                <div className="panel-inner" temprop="item" itemScope="itemscope" itemType="http://schema.org/Product">
                  <a className="img-pane href" itemProp="url" href="/us/fire-tv-with-4k-ultra-hd-and-alexa-voice-remote-1st-gen-streaming-media-player-B01N32NCPM.html">
                    <div className="pane-inner">
                      <img className="pd-img img-lazy" src="https://images-na.ssl-images-amazon.com/images/I/41g8XFzH3-L._AC_SL_QL70_.jpg" data-src="https://images-na.ssl-images-amazon.com/images/I/41g8XFzH3-L._AC_SL_QL70_.jpg" data-sub-src="https://images-na.ssl-images-amazon.com/images/I/41g8XFzH3-L._AC_SL_QL70_.jpg" alt="img" />
                    </div>
                  </a>{/* .img-pane */}
                  <div className="meta-pane">
                    <div className="col-1">
                      <div className="star" itemProp="aggregateRating" itemScope itemType="http://schema.org/AggregateRating">
                        <i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-gray" />                                              </div>
                      <div className="comment-fedo">23290 bình luận</div>
                    </div>
                    <div className="col-2">
                      <div className="web">
                        <i className="si si-flag-us-circle-16" /> <span className="title">Từ Mỹ</span>
                      </div>
                    </div>
                  </div>{/* .meta-field */}
                  <a className="pd-title href" href="/us/fire-tv-with-4k-ultra-hd-and-alexa-voice-remote-1st-gen-streaming-media-player-B01N32NCPM.html"><span className="title-inner">Fire TV with 4K Ultra HD and Alexa Voice Remote (1st Gen), streaming media player</span></a>
                  <div className="price" itemProp="offers" itemScope="itemscope" itemType="http://schema.org/Offer">
                    <div className="curr-price totalPrice" itemProp="price" content="Under $25">1,938,153<sup>đ</sup></div>
                    <div className="old-price" />
                  </div>
                  <div className="price-alert">* Giá trọn gói về Việt Nam</div>
                  <div className="ext-pane">
                    <div className="order-time-field" style={{}}>Sản phẩm hiện đang hết hàng, dự kiến sẽ có hàng lại vào ngày  <b className="text-nowrap">16-10-2018</b> ,tuy nhiên quí khách vẫn có thể đặt hàng trước sản phẩm <br />Thời gian dự kiến quý khách nhận được hàng vào khoảng ngày <b className="text-nowrap">27-10-2018</b> đến <b className="text-nowrap">29-10-2018</b> nếu quý khách thanh toán trong hôm nay<br /></div>
                    <div className="feature-field">
                      <ul className="feature-list">
                        <li>Nhập khẩu chính ngạch</li>
                        <li>Bảo vệ người mua, giảm thiểu rủi ro</li>
                        <li>Giao hàng tận nhà, không lo thủ tục</li>
                      </ul>
                    </div>{/* .feature-field */}
                    <div className="merchant-field">
                      Người bán: <span className="name">Amazon.com</span>
                    </div>
                    <div className="control-field">
                      <a className="btn btn-grd-border btn-xs btn-pill quick-view-btn" href="javascript:;" data-asin="B01N32NCPM" data-merchantid="ATVPDKIKX0DER" data-lang="us" data-url="/all-new-amazon-fire-tv-4k-uhd-streaming-media-player/dp/B01N32NCPM/ref=sr_1_4?s=electronics&ie=UTF8&qid=1538963894&sr=1-4"><div className="btn-inner">Xem nhanh</div></a>
                      <a className="btn btn-grd-bg btn-xs btn-pill detail-view-btn" href="/us/fire-tv-with-4k-ultra-hd-and-alexa-voice-remote-1st-gen-streaming-media-player-B01N32NCPM.html"><div className="btn-inner">Xem chi tiết</div></a>
                    </div>
                  </div>{/* .ext-pane */}
                </div>{/* .panel-inner */}
              </div>{/* .panel-product-v2*/}
            </div>{/* .product-col */}
            <div className="product-col">
              <div className="panel-product-v2 js-get-product-to-asin-us is-checked" id="panel-product" data-asin="B00MNV8E0C">
                <div className="panel-inner" temprop="item" itemScope="itemscope" itemType="http://schema.org/Product">
                  <a className="img-pane href" itemProp="url" href="/us/amazonbasics-aa-performance-alkaline-batteries-48-count-packaging-may-vary-B00MNV8E0C.html">
                    <div className="pane-inner">
                      <img className="pd-img img-lazy" src="https://images-na.ssl-images-amazon.com/images/I/51h3MICcFZL._AC_SL_QL70_.jpg" data-src="https://images-na.ssl-images-amazon.com/images/I/51h3MICcFZL._AC_SL_QL70_.jpg" data-sub-src="https://images-na.ssl-images-amazon.com/images/I/51h3MICcFZL._AC_SL_QL70_.jpg" alt="img" />
                    </div>
                  </a>{/* .img-pane */}
                  <div className="meta-pane">
                    <div className="col-1">
                      <div className="star" itemProp="aggregateRating" itemScope itemType="http://schema.org/AggregateRating">
                        <i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star-half-empty  text-yellow" />                                              </div>
                      <div className="comment-fedo">22892 bình luận</div>
                    </div>
                    <div className="col-2">
                      <div className="web">
                        <i className="si si-flag-us-circle-16" /> <span className="title">Từ Mỹ</span>
                      </div>
                    </div>
                  </div>{/* .meta-field */}
                  <a className="pd-title href" href="/us/amazonbasics-aa-performance-alkaline-batteries-48-count-packaging-may-vary-B00MNV8E0C.html"><span className="title-inner">AmazonBasics AA Performance Alkaline Batteries (48 Count) - Packaging May Vary</span></a>
                  <div className="price" itemProp="offers" itemScope="itemscope" itemType="http://schema.org/Offer">
                    <div className="curr-price totalPrice" itemProp="price" content="Under $25">749,060<sup>đ</sup></div>
                    <div className="old-price" />
                  </div>
                  <div className="price-alert">* Giá trọn gói về Việt Nam</div>
                  <div className="ext-pane">
                    <div className="order-time-field" style={{display: 'none'}} />
                    <div className="feature-field">
                      <ul className="feature-list">
                        <li>Nhập khẩu chính ngạch</li>
                        <li>Bảo vệ người mua, giảm thiểu rủi ro</li>
                        <li>Giao hàng tận nhà, không lo thủ tục</li>
                      </ul>
                    </div>{/* .feature-field */}
                    <div className="merchant-field">
                      Người bán: <span className="name">Amazon.com</span>
                    </div>
                    <div className="control-field">
                      <a className="btn btn-grd-border btn-xs btn-pill quick-view-btn" href="javascript:;" data-asin="B00MNV8E0C" data-merchantid="ATVPDKIKX0DER" data-lang="us" data-url="/AmazonBasics-Performance-Alkaline-Batteries-Count/dp/B00MNV8E0C/ref=sr_1_5?s=electronics&ie=UTF8&qid=1538963894&sr=1-5"><div className="btn-inner">Xem nhanh</div></a>
                      <a className="btn btn-grd-bg btn-xs btn-pill detail-view-btn" href="/us/amazonbasics-aa-performance-alkaline-batteries-48-count-packaging-may-vary-B00MNV8E0C.html"><div className="btn-inner">Xem chi tiết</div></a>
                    </div>
                  </div>{/* .ext-pane */}
                </div>{/* .panel-inner */}
              </div>{/* .panel-product-v2*/}
            </div>{/* .product-col */}
            <div className="product-col">
              <div className="panel-product-v2 js-get-product-to-asin-us is-checked" id="panel-product" data-asin="B073DLZWX7">
                <div className="panel-inner" temprop="item" itemScope="itemscope" itemType="http://schema.org/Product">
                  <a className="img-pane href" itemProp="url" href="/us/maxboost-screen-protector-for-apple-iphone-xs-iphone-x-clear-3-packs-025mm-iphone-xsx-tempered-glass-screen-protector-with-advanced-clarity-3d-touch-work-with-most-case-99-touch-accurate-B073DLZWX7.html">
                    <div className="pane-inner">
                      <img className="pd-img img-lazy" src="https://images-na.ssl-images-amazon.com/images/I/51y1b8ooOdL._AC_SL_QL70_.jpg" data-src="https://images-na.ssl-images-amazon.com/images/I/51y1b8ooOdL._AC_SL_QL70_.jpg" data-sub-src="https://images-na.ssl-images-amazon.com/images/I/51y1b8ooOdL._AC_SL_QL70_.jpg" alt="img" />
                    </div>
                  </a>{/* .img-pane */}
                  <div className="meta-pane">
                    <div className="col-1">
                      <div className="star" itemProp="aggregateRating" itemScope itemType="http://schema.org/AggregateRating">
                        <i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star-half-empty  text-yellow" />                                              </div>
                      <div className="comment-fedo">8524 bình luận</div>
                    </div>
                    <div className="col-2">
                      <div className="web">
                        <i className="si si-flag-us-circle-16" /> <span className="title">Từ Mỹ</span>
                      </div>
                    </div>
                  </div>{/* .meta-field */}
                  <a className="pd-title href" href="/us/maxboost-screen-protector-for-apple-iphone-xs-iphone-x-clear-3-packs-025mm-iphone-xsx-tempered-glass-screen-protector-with-advanced-clarity-3d-touch-work-with-most-case-99-touch-accurate-B073DLZWX7.html"><span className="title-inner">Maxboost Screen Protector for Apple iPhone XS &amp; iPhone X (Clear, 3 Packs) 0.25mm iPhone XS/X Tempered Glass Screen Protector with Advanced Clarity [3D Touch] Work with Most Case 99% Touch Accurate</span></a>
                  <div className="price" itemProp="offers" itemScope="itemscope" itemType="http://schema.org/Offer">
                    <div className="curr-price totalPrice" itemProp="price" content="Under $25">506,611<sup>đ</sup></div>
                    <div className="old-price" />
                  </div>
                  <div className="price-alert">* Giá trọn gói về Việt Nam</div>
                  <div className="ext-pane">
                    <div className="order-time-field" style={{display: 'none'}} />
                    <div className="feature-field">
                      <ul className="feature-list">
                        <li>Nhập khẩu chính ngạch</li>
                        <li>Bảo vệ người mua, giảm thiểu rủi ro</li>
                        <li>Giao hàng tận nhà, không lo thủ tục</li>
                      </ul>
                    </div>{/* .feature-field */}
                    <div className="merchant-field">
                      Người bán: <span className="name">power-innovation</span>
                    </div>
                    <div className="control-field">
                      <a className="btn btn-grd-border btn-xs btn-pill quick-view-btn" href="javascript:;" data-asin="B073DLZWX7" data-merchantid="A10ABS3Q8PD59I" data-lang="us" data-url="/Maxboost-Protector-Tempered-Advanced-Accurate/dp/B073DLZWX7/ref=sr_1_6?s=electronics&ie=UTF8&qid=1538963894&sr=1-6"><div className="btn-inner">Xem nhanh</div></a>
                      <a className="btn btn-grd-bg btn-xs btn-pill detail-view-btn" href="/us/maxboost-screen-protector-for-apple-iphone-xs-iphone-x-clear-3-packs-025mm-iphone-xsx-tempered-glass-screen-protector-with-advanced-clarity-3d-touch-work-with-most-case-99-touch-accurate-B073DLZWX7.html"><div className="btn-inner">Xem chi tiết</div></a>
                    </div>
                  </div>{/* .ext-pane */}
                </div>{/* .panel-inner */}
              </div>{/* .panel-product-v2*/}
            </div>{/* .product-col */}
            <div className="product-col">
              <div className="panel-product-v2 js-get-product-to-asin-us is-checked" id="panel-product" data-asin="B0781Z7Y3S">
                <div className="panel-inner" temprop="item" itemScope="itemscope" itemType="http://schema.org/Product">
                  <a className="img-pane href" itemProp="url" href="/us/samsung-860-evo-500gb-25-inch-sata-iii-internal-ssd-mz-76e500bam-B0781Z7Y3S.html">
                    <div className="pane-inner">
                      <img className="pd-img img-lazy" src="https://images-na.ssl-images-amazon.com/images/I/31CElO-B3PL._AC_SL_QL70_.jpg" data-src="https://images-na.ssl-images-amazon.com/images/I/31CElO-B3PL._AC_SL_QL70_.jpg" data-sub-src="https://images-na.ssl-images-amazon.com/images/I/31CElO-B3PL._AC_SL_QL70_.jpg" alt="img" />
                    </div>
                    <span className="sale-tag">-20%</span></a>{/* .img-pane */}
                  <div className="meta-pane">
                    <div className="col-1">
                      <div className="star" itemProp="aggregateRating" itemScope itemType="http://schema.org/AggregateRating">
                        <i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star-half-empty  text-yellow" />                                              </div>
                      <div className="comment-fedo">1297 bình luận</div>
                    </div>
                    <div className="col-2">
                      <div className="web">
                        <i className="si si-flag-us-circle-16" /> <span className="title">Từ Mỹ</span>
                      </div>
                    </div>
                  </div>{/* .meta-field */}
                  <a className="pd-title href" href="/us/samsung-860-evo-500gb-25-inch-sata-iii-internal-ssd-mz-76e500bam-B0781Z7Y3S.html"><span className="title-inner">Samsung 860 EVO 500GB 2.5 Inch SATA III Internal SSD (MZ-76E500B/AM)</span></a>
                  <div className="price" itemProp="offers" itemScope="itemscope" itemType="http://schema.org/Offer">
                    <div className="curr-price totalPrice" itemProp="price" content="Under $25">2,720,382<sup>đ</sup></div>
                    <div className="old-price">3,264,458<sup>đ</sup></div>
                  </div>
                  <div className="price-alert">* Giá trọn gói về Việt Nam</div>
                  <div className="ext-pane">
                    <div className="order-time-field" style={{display: 'none'}} />
                    <div className="feature-field">
                      <ul className="feature-list">
                        <li>Nhập khẩu chính ngạch</li>
                        <li>Bảo vệ người mua, giảm thiểu rủi ro</li>
                        <li>Giao hàng tận nhà, không lo thủ tục</li>
                      </ul>
                    </div>{/* .feature-field */}
                    <div className="merchant-field">
                      Người bán: <span className="name">Amazon.com</span>
                    </div>
                    <div className="control-field">
                      <a className="btn btn-grd-border btn-xs btn-pill quick-view-btn" href="javascript:;" data-asin="B0781Z7Y3S" data-merchantid="ATVPDKIKX0DER" data-lang="us" data-url="/Samsung-500GB-Internal-MZ-76E500B-AM/dp/B0781Z7Y3S/ref=sr_1_7?s=electronics&ie=UTF8&qid=1538963894&sr=1-7"><div className="btn-inner">Xem nhanh</div></a>
                      <a className="btn btn-grd-bg btn-xs btn-pill detail-view-btn" href="/us/samsung-860-evo-500gb-25-inch-sata-iii-internal-ssd-mz-76e500bam-B0781Z7Y3S.html"><div className="btn-inner">Xem chi tiết</div></a>
                    </div>
                  </div>{/* .ext-pane */}
                </div>{/* .panel-inner */}
              </div>{/* .panel-product-v2*/}
            </div>{/* .product-col */}
            <div className="product-col">
              <div className="panel-product-v2 js-get-product-to-asin-us is-checked" id="panel-product" data-asin="B00OQVZDJM">
                <div className="panel-inner" temprop="item" itemScope="itemscope" itemType="http://schema.org/Product">
                  <a className="img-pane href" itemProp="url" href="/us/kindle-paperwhite-e-reader-black-6-high-resolution-display-300-ppi-with-built-in-light-wi-fi-includes-special-offers-B00OQVZDJM.html">
                    <div className="pane-inner">
                      <img className="pd-img img-lazy" src="https://images-na.ssl-images-amazon.com/images/I/51nk+aSvOFL._AC_SL_QL70_.jpg" data-src="https://images-na.ssl-images-amazon.com/images/I/51nk+aSvOFL._AC_SL_QL70_.jpg" data-sub-src="https://images-na.ssl-images-amazon.com/images/I/51nk+aSvOFL._AC_SL_QL70_.jpg" alt="img" />
                    </div>
                  </a>{/* .img-pane */}
                  <div className="meta-pane">
                    <div className="col-1">
                      <div className="star" itemProp="aggregateRating" itemScope itemType="http://schema.org/AggregateRating">
                        <i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star-half-empty  text-yellow" />                                              </div>
                      <div className="comment-fedo">64528 bình luận</div>
                    </div>
                    <div className="col-2">
                      <div className="web">
                        <i className="si si-flag-us-circle-16" /> <span className="title">Từ Mỹ</span>
                      </div>
                    </div>
                  </div>{/* .meta-field */}
                  <a className="pd-title href" href="/us/kindle-paperwhite-e-reader-black-6-high-resolution-display-300-ppi-with-built-in-light-wi-fi-includes-special-offers-B00OQVZDJM.html"><span className="title-inner">Kindle Paperwhite E-reader - Black, 6" High-Resolution Display (300 ppi) with Built-in Light, Wi-Fi - Includes Special Offers</span></a>
                  <div className="price" itemProp="offers" itemScope="itemscope" itemType="http://schema.org/Offer">
                    <div className="curr-price totalPrice" itemProp="price" content="Under $25">3,489,248<sup>đ</sup></div>
                    <div className="old-price" />
                  </div>
                  <div className="price-alert">* Giá trọn gói về Việt Nam</div>
                  <div className="ext-pane">
                    <div className="order-time-field" style={{display: 'none'}} />
                    <div className="feature-field">
                      <ul className="feature-list">
                        <li>Nhập khẩu chính ngạch</li>
                        <li>Bảo vệ người mua, giảm thiểu rủi ro</li>
                        <li>Giao hàng tận nhà, không lo thủ tục</li>
                      </ul>
                    </div>{/* .feature-field */}
                    <div className="merchant-field">
                      Người bán: <span className="name">Amazon.com</span>
                    </div>
                    <div className="control-field">
                      <a className="btn btn-grd-border btn-xs btn-pill quick-view-btn" href="javascript:;" data-asin="B00OQVZDJM" data-merchantid="ATVPDKIKX0DER" data-lang="us" data-url="/Amazon-Kindle-Paperwhite-6-Inch-4GB-eReader/dp/B00OQVZDJM/ref=sr_1_8?s=electronics&ie=UTF8&qid=1538963894&sr=1-8"><div className="btn-inner">Xem nhanh</div></a>
                      <a className="btn btn-grd-bg btn-xs btn-pill detail-view-btn" href="/us/kindle-paperwhite-e-reader-black-6-high-resolution-display-300-ppi-with-built-in-light-wi-fi-includes-special-offers-B00OQVZDJM.html"><div className="btn-inner">Xem chi tiết</div></a>
                    </div>
                  </div>{/* .ext-pane */}
                </div>{/* .panel-inner */}
              </div>{/* .panel-product-v2*/}
            </div>{/* .product-col */}
            <div className="product-col">
              <div className="panel-product-v2 js-get-product-to-asin-us is-checked" id="panel-product" data-asin="B07HCTJC91">
                <div className="panel-inner" temprop="item" itemScope="itemscope" itemType="http://schema.org/Product">
                  <a className="img-pane href" itemProp="url" href="/us/nintendo-switch-super-smash-bros-ultimate-edition-switch-B07HCTJC91.html">
                    <div className="pane-inner">
                      <img className="pd-img img-lazy" src="https://images-na.ssl-images-amazon.com/images/I/41cW4pEDwXL._AC_SL_QL70_.jpg" data-src="https://images-na.ssl-images-amazon.com/images/I/41cW4pEDwXL._AC_SL_QL70_.jpg" data-sub-src="https://images-na.ssl-images-amazon.com/images/I/41cW4pEDwXL._AC_SL_QL70_.jpg" alt="img" />
                    </div>
                  </a>{/* .img-pane */}
                  <div className="meta-pane">
                    <div className="col-1">
                      <div className="star" itemProp="aggregateRating" itemScope itemType="http://schema.org/AggregateRating">
                        <i className="fa fa-star text-gray" /><i className="fa fa-star text-gray" /><i className="fa fa-star text-gray" /><i className="fa fa-star text-gray" /><i className="fa fa-star text-gray" />                                              </div>
                      <div className="comment-fedo">0 bình luận</div>
                    </div>
                    <div className="col-2">
                      <div className="web">
                        <i className="si si-flag-us-circle-16" /> <span className="title">Từ Mỹ</span>
                      </div>
                    </div>
                  </div>{/* .meta-field */}
                  <a className="pd-title href" href="/us/nintendo-switch-super-smash-bros-ultimate-edition-switch-B07HCTJC91.html"><span className="title-inner">Nintendo Switch Super Smash Bros. Ultimate Edition - Switch</span></a>
                  <div className="price" itemProp="offers" itemScope="itemscope" itemType="http://schema.org/Offer">
                    <div className="curr-price totalPrice" itemProp="price" content="Under $25">10,820,439<sup>đ</sup></div>
                    <div className="old-price" />
                  </div>
                  <div className="price-alert">* Giá trọn gói về Việt Nam</div>
                  <div className="ext-pane">
                    <div className="order-time-field" style={{}}>Sản phẩm này hiện chưa được phát hành, quý khách vẫn có thể đặt mua trước. Dự kiến sẽ giao đến địa chỉ quý khách vào khoảng ngày <b className="text-nowrap">14-11-2018</b> đến <b className="text-nowrap">16-11-2018</b> nếu quý khách thanh toán trong hôm nay<br /></div>
                    <div className="feature-field">
                      <ul className="feature-list">
                        <li>Nhập khẩu chính ngạch</li>
                        <li>Bảo vệ người mua, giảm thiểu rủi ro</li>
                        <li>Giao hàng tận nhà, không lo thủ tục</li>
                      </ul>
                    </div>{/* .feature-field */}
                    <div className="merchant-field">
                      Người bán: <span className="name">Amazon.com</span>
                    </div>
                    <div className="control-field">
                      <a className="btn btn-grd-border btn-xs btn-pill quick-view-btn" href="javascript:;" data-asin="B07HCTJC91" data-merchantid="ATVPDKIKX0DER" data-lang="us" data-url="/Nintendo-Switch-Super-Smash-Bros-Ultimate/dp/B07HCTJC91/ref=sr_1_9?s=electronics&ie=UTF8&qid=1538963894&sr=1-9"><div className="btn-inner">Xem nhanh</div></a>
                      <a className="btn btn-grd-bg btn-xs btn-pill detail-view-btn" href="/us/nintendo-switch-super-smash-bros-ultimate-edition-switch-B07HCTJC91.html"><div className="btn-inner">Xem chi tiết</div></a>
                    </div>
                  </div>{/* .ext-pane */}
                </div>{/* .panel-inner */}
              </div>{/* .panel-product-v2*/}
            </div>{/* .product-col */}
            <div className="product-col">
              <div className="panel-product-v2 js-get-product-to-asin-us is-checked" id="panel-product" data-asin="B01MTGM5I9">
                <div className="panel-inner" temprop="item" itemScope="itemscope" itemType="http://schema.org/Product">
                  <a className="img-pane href" itemProp="url" href="/us/tcl-55s405-55-inch-4k-ultra-hd-roku-smart-led-tv-2017-model-B01MTGM5I9.html">
                    <div className="pane-inner">
                      <img className="pd-img img-lazy" src="https://images-na.ssl-images-amazon.com/images/I/41+Ixf-d0cL._AC_SL_QL70_.jpg" data-src="https://images-na.ssl-images-amazon.com/images/I/41+Ixf-d0cL._AC_SL_QL70_.jpg" data-sub-src="https://images-na.ssl-images-amazon.com/images/I/41+Ixf-d0cL._AC_SL_QL70_.jpg" alt="img" />
                    </div>
                    <span className="sale-tag">-37%</span></a>{/* .img-pane */}
                  <div className="meta-pane">
                    <div className="col-1">
                      <div className="star" itemProp="aggregateRating" itemScope itemType="http://schema.org/AggregateRating">
                        <i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star-half-empty  text-yellow" />                                              </div>
                      <div className="comment-fedo">2712 bình luận</div>
                    </div>
                    <div className="col-2">
                      <div className="web">
                        <i className="si si-flag-us-circle-16" /> <span className="title">Từ Mỹ</span>
                      </div>
                    </div>
                  </div>{/* .meta-field */}
                  <a className="pd-title href" href="/us/tcl-55s405-55-inch-4k-ultra-hd-roku-smart-led-tv-2017-model-B01MTGM5I9.html"><span className="title-inner">TCL 55S405 55-Inch 4K Ultra HD Roku Smart LED TV (2017 Model)</span></a>
                  <div className="price" itemProp="offers" itemScope="itemscope" itemType="http://schema.org/Offer">
                    <div className="curr-price totalPrice" itemProp="price" content="Under $25">14,225,450<sup>đ</sup></div>
                    <div className="old-price">19,488,867<sup>đ</sup></div>
                  </div>
                  <div className="price-alert">* Giá trọn gói về Việt Nam</div>
                  <div className="ext-pane">
                    <div className="order-time-field" style={{display: 'none'}} />
                    <div className="feature-field">
                      <ul className="feature-list">
                        <li>Nhập khẩu chính ngạch</li>
                        <li>Bảo vệ người mua, giảm thiểu rủi ro</li>
                        <li>Giao hàng tận nhà, không lo thủ tục</li>
                      </ul>
                    </div>{/* .feature-field */}
                    <div className="merchant-field">
                      Người bán: <span className="name">Amazon.com</span>
                    </div>
                    <div className="control-field">
                      <a className="btn btn-grd-border btn-xs btn-pill quick-view-btn" href="javascript:;" data-asin="B01MTGM5I9" data-merchantid="ATVPDKIKX0DER" data-lang="us" data-url="/TCL-55S405-55-Inch-Ultra-Smart/dp/B01MTGM5I9/ref=sr_1_12?s=electronics&ie=UTF8&qid=1538963894&sr=1-12"><div className="btn-inner">Xem nhanh</div></a>
                      <a className="btn btn-grd-bg btn-xs btn-pill detail-view-btn" href="/us/tcl-55s405-55-inch-4k-ultra-hd-roku-smart-led-tv-2017-model-B01MTGM5I9.html"><div className="btn-inner">Xem chi tiết</div></a>
                    </div>
                  </div>{/* .ext-pane */}
                </div>{/* .panel-inner */}
              </div>{/* .panel-product-v2*/}
            </div>{/* .product-col */}
            <div className="product-col">
              <div className="panel-product-v2 js-get-product-to-asin-us is-checked" id="panel-product" data-asin="B06XCM9LJ4">
                <div className="panel-inner" temprop="item" itemScope="itemscope" itemType="http://schema.org/Product">
                  <a className="img-pane href" itemProp="url" href="/us/echo-2nd-generation-smart-speaker-with-alexa-charcoal-fabric-B06XCM9LJ4.html">
                    <div className="pane-inner">
                      <img className="pd-img img-lazy" src="https://images-na.ssl-images-amazon.com/images/I/51LtByererL._AC_SL_QL70_.jpg" data-src="https://images-na.ssl-images-amazon.com/images/I/51LtByererL._AC_SL_QL70_.jpg" data-sub-src="https://images-na.ssl-images-amazon.com/images/I/51LtByererL._AC_SL_QL70_.jpg" alt="img" />
                    </div>
                    <span className="sale-tag">-20%</span></a>{/* .img-pane */}
                  <div className="meta-pane">
                    <div className="col-1">
                      <div className="star" itemProp="aggregateRating" itemScope itemType="http://schema.org/AggregateRating">
                        <i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star-half-empty  text-yellow" />                                              </div>
                      <div className="comment-fedo">31448 bình luận</div>
                    </div>
                    <div className="col-2">
                      <div className="web">
                        <i className="si si-flag-us-circle-16" /> <span className="title">Từ Mỹ</span>
                      </div>
                    </div>
                  </div>{/* .meta-field */}
                  <a className="pd-title href" href="/us/echo-2nd-generation-smart-speaker-with-alexa-charcoal-fabric-B06XCM9LJ4.html"><span className="title-inner">Echo (2nd Generation) - Smart speaker with Alexa - Charcoal Fabric</span></a>
                  <div className="price" itemProp="offers" itemScope="itemscope" itemType="http://schema.org/Offer">
                    <div className="curr-price totalPrice" itemProp="price" content="Under $25">2,567,420<sup>đ</sup></div>
                    <div className="old-price">3,080,904<sup>đ</sup></div>
                  </div>
                  <div className="price-alert">* Giá trọn gói về Việt Nam</div>
                  <div className="ext-pane">
                    <div className="order-time-field" style={{display: 'none'}} />
                    <div className="feature-field">
                      <ul className="feature-list">
                        <li>Nhập khẩu chính ngạch</li>
                        <li>Bảo vệ người mua, giảm thiểu rủi ro</li>
                        <li>Giao hàng tận nhà, không lo thủ tục</li>
                      </ul>
                    </div>{/* .feature-field */}
                    <div className="merchant-field">
                      Người bán: <span className="name">Amazon.com</span>
                    </div>
                    <div className="control-field">
                      <a className="btn btn-grd-border btn-xs btn-pill quick-view-btn" href="javascript:;" data-asin="B06XCM9LJ4" data-merchantid="ATVPDKIKX0DER" data-lang="us" data-url="/all-new-amazon-echo-speaker-with-wifi-alexa-dark-charcoal/dp/B06XCM9LJ4/ref=sr_1_13?s=electronics&ie=UTF8&qid=1538963894&sr=1-13"><div className="btn-inner">Xem nhanh</div></a>
                      <a className="btn btn-grd-bg btn-xs btn-pill detail-view-btn" href="/us/echo-2nd-generation-smart-speaker-with-alexa-charcoal-fabric-B06XCM9LJ4.html"><div className="btn-inner">Xem chi tiết</div></a>
                    </div>
                  </div>{/* .ext-pane */}
                </div>{/* .panel-inner */}
              </div>{/* .panel-product-v2*/}
            </div>{/* .product-col */}
            <div className="product-col">
              <div className="panel-product-v2 js-get-product-to-asin-us is-checked" id="panel-product" data-asin="B01MUAGZ49">
                <div className="panel-inner" temprop="item" itemScope="itemscope" itemType="http://schema.org/Product">
                  <a className="img-pane href" itemProp="url" href="/us/nintendo-switch-neon-red-and-neon-blue-joy-con-B01MUAGZ49.html">
                    <div className="pane-inner">
                      <img className="pd-img img-lazy" src="https://images-na.ssl-images-amazon.com/images/I/41R9FArsBDL._AC_SL_QL70_.jpg" data-src="https://images-na.ssl-images-amazon.com/images/I/41R9FArsBDL._AC_SL_QL70_.jpg" data-sub-src="https://images-na.ssl-images-amazon.com/images/I/41R9FArsBDL._AC_SL_QL70_.jpg" alt="img" />
                    </div>
                  </a>{/* .img-pane */}
                  <div className="meta-pane">
                    <div className="col-1">
                      <div className="star" itemProp="aggregateRating" itemScope itemType="http://schema.org/AggregateRating">
                        <i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star-half-empty  text-yellow" />                                              </div>
                      <div className="comment-fedo">4641 bình luận</div>
                    </div>
                    <div className="col-2">
                      <div className="web">
                        <i className="si si-flag-us-circle-16" /> <span className="title">Từ Mỹ</span>
                      </div>
                    </div>
                  </div>{/* .meta-field */}
                  <a className="pd-title href" href="/us/nintendo-switch-neon-red-and-neon-blue-joy-con-B01MUAGZ49.html"><span className="title-inner">Nintendo Switch – Neon Red and Neon Blue Joy-Con</span></a>
                  <div className="price" itemProp="offers" itemScope="itemscope" itemType="http://schema.org/Offer">
                    <div className="curr-price totalPrice" itemProp="price" content="Under $25">9,007,805<sup>đ</sup></div>
                    <div className="old-price" />
                  </div>
                  <div className="price-alert">* Giá trọn gói về Việt Nam</div>
                  <div className="ext-pane">
                    <div className="order-time-field" style={{display: 'none'}} />
                    <div className="feature-field">
                      <ul className="feature-list">
                        <li>Nhập khẩu chính ngạch</li>
                        <li>Bảo vệ người mua, giảm thiểu rủi ro</li>
                        <li>Giao hàng tận nhà, không lo thủ tục</li>
                      </ul>
                    </div>{/* .feature-field */}
                    <div className="merchant-field">
                      Người bán: <span className="name">Amazon.com</span>
                    </div>
                    <div className="control-field">
                      <a className="btn btn-grd-border btn-xs btn-pill quick-view-btn" href="javascript:;" data-asin="B01MUAGZ49" data-merchantid="ATVPDKIKX0DER" data-lang="us" data-url="/Nintendo-Switch-Neon-Red-Blue-Joy/dp/B01MUAGZ49/ref=sr_1_14?s=electronics&ie=UTF8&qid=1538963894&sr=1-14"><div className="btn-inner">Xem nhanh</div></a>
                      <a className="btn btn-grd-bg btn-xs btn-pill detail-view-btn" href="/us/nintendo-switch-neon-red-and-neon-blue-joy-con-B01MUAGZ49.html"><div className="btn-inner">Xem chi tiết</div></a>
                    </div>
                  </div>{/* .ext-pane */}
                </div>{/* .panel-inner */}
              </div>{/* .panel-product-v2*/}
            </div>{/* .product-col */}
            <div className="product-col">
              <div className="panel-product-v2 js-get-product-to-asin-us is-checked" id="panel-product" data-asin="B06XWZWYVP">
                <div className="panel-inner" temprop="item" itemScope="itemscope" itemType="http://schema.org/Product">
                  <a className="img-pane href" itemProp="url" href="/us/samsung-128gb-100mbs-u3-microsd-evo-select-memory-card-with-adapter-mb-me128gaam-B06XWZWYVP.html">
                    <div className="pane-inner">
                      <img className="pd-img img-lazy" src="https://images-na.ssl-images-amazon.com/images/I/417GrTrMCfL._AC_SL_QL70_.jpg" data-src="https://images-na.ssl-images-amazon.com/images/I/417GrTrMCfL._AC_SL_QL70_.jpg" data-sub-src="https://images-na.ssl-images-amazon.com/images/I/417GrTrMCfL._AC_SL_QL70_.jpg" alt="img" />
                    </div>
                    <span className="sale-tag">-31%</span></a>{/* .img-pane */}
                  <div className="meta-pane">
                    <div className="col-1">
                      <div className="star" itemProp="aggregateRating" itemScope itemType="http://schema.org/AggregateRating">
                        <i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star-half-empty  text-yellow" />                                              </div>
                      <div className="comment-fedo">9826 bình luận</div>
                    </div>
                    <div className="col-2">
                      <div className="web">
                        <i className="si si-flag-us-circle-16" /> <span className="title">Từ Mỹ</span>
                      </div>
                    </div>
                  </div>{/* .meta-field */}
                  <a className="pd-title href" href="/us/samsung-128gb-100mbs-u3-microsd-evo-select-memory-card-with-adapter-mb-me128gaam-B06XWZWYVP.html"><span className="title-inner">Samsung 128GB 100MB/s (U3) MicroSD EVO Select Memory Card with Adapter (MB-ME128GA/AM)</span></a>
                  <div className="price" itemProp="offers" itemScope="itemscope" itemType="http://schema.org/Offer">
                    <div className="curr-price totalPrice" itemProp="price" content="Under $25">1,038,279<sup>đ</sup></div>
                    <div className="old-price">1,360,146<sup>đ</sup></div>
                  </div>
                  <div className="price-alert">* Giá trọn gói về Việt Nam</div>
                  <div className="ext-pane">
                    <div className="order-time-field" style={{display: 'none'}} />
                    <div className="feature-field">
                      <ul className="feature-list">
                        <li>Nhập khẩu chính ngạch</li>
                        <li>Bảo vệ người mua, giảm thiểu rủi ro</li>
                        <li>Giao hàng tận nhà, không lo thủ tục</li>
                      </ul>
                    </div>{/* .feature-field */}
                    <div className="merchant-field">
                      Người bán: <span className="name">Amazon.com</span>
                    </div>
                    <div className="control-field">
                      <a className="btn btn-grd-border btn-xs btn-pill quick-view-btn" href="javascript:;" data-asin="B06XWZWYVP" data-merchantid="ATVPDKIKX0DER" data-lang="us" data-url="/Samsung-MicroSD-Adapter-MB-ME128GA-AM/dp/B06XWZWYVP/ref=sr_1_15?s=electronics&ie=UTF8&qid=1538963894&sr=1-15"><div className="btn-inner">Xem nhanh</div></a>
                      <a className="btn btn-grd-bg btn-xs btn-pill detail-view-btn" href="/us/samsung-128gb-100mbs-u3-microsd-evo-select-memory-card-with-adapter-mb-me128gaam-B06XWZWYVP.html"><div className="btn-inner">Xem chi tiết</div></a>
                    </div>
                  </div>{/* .ext-pane */}
                </div>{/* .panel-inner */}
              </div>{/* .panel-product-v2*/}
            </div>{/* .product-col */}
            <div className="product-col">
              <div className="panel-product-v2 js-get-product-to-asin-us is-checked" id="panel-product" data-asin="B07B6L2QCF">
                <div className="panel-inner" temprop="item" itemScope="itemscope" itemType="http://schema.org/Product">
                  <a className="img-pane href" itemProp="url" href="/us/all-new-alexa-voice-remote-with-power-and-volume-controls-B07B6L2QCF.html">
                    <div className="pane-inner">
                      <img className="pd-img img-lazy" src="https://images-na.ssl-images-amazon.com/images/I/31lXZk1CSyL._AC_SL_QL70_.jpg" data-src="https://images-na.ssl-images-amazon.com/images/I/31lXZk1CSyL._AC_SL_QL70_.jpg" data-sub-src="https://images-na.ssl-images-amazon.com/images/I/31lXZk1CSyL._AC_SL_QL70_.jpg" alt="img" />
                    </div>
                  </a>{/* .img-pane */}
                  <div className="meta-pane">
                    <div className="col-1">
                      <div className="star" itemProp="aggregateRating" itemScope itemType="http://schema.org/AggregateRating">
                        <i className="fa fa-star text-gray" /><i className="fa fa-star text-gray" /><i className="fa fa-star text-gray" /><i className="fa fa-star text-gray" /><i className="fa fa-star text-gray" />                                              </div>
                      <div className="comment-fedo">0 bình luận</div>
                    </div>
                    <div className="col-2">
                      <div className="web">
                        <i className="si si-flag-us-circle-16" /> <span className="title">Từ Mỹ</span>
                      </div>
                    </div>
                  </div>{/* .meta-field */}
                  <a className="pd-title href" href="/us/all-new-alexa-voice-remote-with-power-and-volume-controls-B07B6L2QCF.html"><span className="title-inner">All-new Alexa Voice Remote with power and volume controls</span></a>
                  <div className="price" itemProp="offers" itemScope="itemscope" itemType="http://schema.org/Offer">
                    <div className="curr-price totalPrice" itemProp="price" content="Under $25">1,063,813<sup>đ</sup></div>
                    <div className="old-price" />
                  </div>
                  <div className="price-alert">* Giá trọn gói về Việt Nam</div>
                  <div className="ext-pane">
                    <div className="order-time-field" style={{}}>Sản phẩm này hiện chưa được phát hành, quý khách vẫn có thể đặt mua trước. Dự kiến sẽ giao đến địa chỉ quý khách vào khoảng ngày <b className="text-nowrap">10-11-2018</b> đến <b className="text-nowrap">12-11-2018</b> nếu quý khách thanh toán trong hôm nay<br /></div>
                    <div className="feature-field">
                      <ul className="feature-list">
                        <li>Nhập khẩu chính ngạch</li>
                        <li>Bảo vệ người mua, giảm thiểu rủi ro</li>
                        <li>Giao hàng tận nhà, không lo thủ tục</li>
                      </ul>
                    </div>{/* .feature-field */}
                    <div className="merchant-field">
                      Người bán: <span className="name">Amazon.com</span>
                    </div>
                    <div className="control-field">
                      <a className="btn btn-grd-border btn-xs btn-pill quick-view-btn" href="javascript:;" data-asin="B07B6L2QCF" data-merchantid="ATVPDKIKX0DER" data-lang="us" data-url="/All-New-Alexa-Voice-Remote-with-power-and-volume-controls/dp/B07B6L2QCF/ref=sr_1_16?s=electronics&ie=UTF8&qid=1538963894&sr=1-16"><div className="btn-inner">Xem nhanh</div></a>
                      <a className="btn btn-grd-bg btn-xs btn-pill detail-view-btn" href="/us/all-new-alexa-voice-remote-with-power-and-volume-controls-B07B6L2QCF.html"><div className="btn-inner">Xem chi tiết</div></a>
                    </div>
                  </div>{/* .ext-pane */}
                </div>{/* .panel-inner */}
              </div>{/* .panel-product-v2*/}
            </div>{/* .product-col */}
            <div className="product-col">
              <div className="panel-product-v2 js-get-product-to-asin-us is-checked" id="panel-product" data-asin="B075XN1NZC">
                <div className="panel-inner" temprop="item" itemScope="itemscope" itemType="http://schema.org/Product">
                  <a className="img-pane href" itemProp="url" href="/us/roku-express-5x-more-powerful-hd-streaming-B075XN1NZC.html">
                    <div className="pane-inner">
                      <img className="pd-img img-lazy" src="https://images-na.ssl-images-amazon.com/images/I/31InHuUEQyL._AC_SL_QL70_.jpg" data-src="https://images-na.ssl-images-amazon.com/images/I/31InHuUEQyL._AC_SL_QL70_.jpg" data-sub-src="https://images-na.ssl-images-amazon.com/images/I/31InHuUEQyL._AC_SL_QL70_.jpg" alt="img" />
                    </div>
                  </a>{/* .img-pane */}
                  <div className="meta-pane">
                    <div className="col-1">
                      <div className="star" itemProp="aggregateRating" itemScope itemType="http://schema.org/AggregateRating">
                        <i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star-half-empty  text-yellow" />                                              </div>
                      <div className="comment-fedo">4187 bình luận</div>
                    </div>
                    <div className="col-2">
                      <div className="web">
                        <i className="si si-flag-us-circle-16" /> <span className="title">Từ Mỹ</span>
                      </div>
                    </div>
                  </div>{/* .meta-field */}
                  <a className="pd-title href" href="/us/roku-express-5x-more-powerful-hd-streaming-B075XN1NZC.html"><span className="title-inner">Roku Express | 5X More Powerful HD Streaming</span></a>
                  <div className="price" itemProp="offers" itemScope="itemscope" itemType="http://schema.org/Offer">
                    <div className="curr-price totalPrice" itemProp="price" content="Under $25">1,125,856<sup>đ</sup></div>
                    <div className="old-price" />
                  </div>
                  <div className="price-alert">* Giá trọn gói về Việt Nam</div>
                  <div className="ext-pane">
                    <div className="order-time-field" style={{display: 'none'}} />
                    <div className="feature-field">
                      <ul className="feature-list">
                        <li>Nhập khẩu chính ngạch</li>
                        <li>Bảo vệ người mua, giảm thiểu rủi ro</li>
                        <li>Giao hàng tận nhà, không lo thủ tục</li>
                      </ul>
                    </div>{/* .feature-field */}
                    <div className="merchant-field">
                      Người bán: <span className="name">Amazon.com</span>
                    </div>
                    <div className="control-field">
                      <a className="btn btn-grd-border btn-xs btn-pill quick-view-btn" href="javascript:;" data-asin="B075XN1NZC" data-merchantid="ATVPDKIKX0DER" data-lang="us" data-url="/Roku-Express-More-Powerful-Streaming/dp/B075XN1NZC/ref=sr_1_17?s=electronics&ie=UTF8&qid=1538963894&sr=1-17"><div className="btn-inner">Xem nhanh</div></a>
                      <a className="btn btn-grd-bg btn-xs btn-pill detail-view-btn" href="/us/roku-express-5x-more-powerful-hd-streaming-B075XN1NZC.html"><div className="btn-inner">Xem chi tiết</div></a>
                    </div>
                  </div>{/* .ext-pane */}
                </div>{/* .panel-inner */}
              </div>{/* .panel-product-v2*/}
            </div>{/* .product-col */}
            <div className="product-col">
              <div className="panel-product-v2 js-get-product-to-asin-us is-checked" id="panel-product" data-asin="B079QHML21">
                <div className="panel-inner" temprop="item" itemScope="itemscope" itemType="http://schema.org/Product">
                  <a className="img-pane href" itemProp="url" href="/us/fire-tv-stick-4k-with-all-new-alexa-voice-remote-streaming-media-player-B079QHML21.html">
                    <div className="pane-inner">
                      <img className="pd-img img-lazy" src="https://images-na.ssl-images-amazon.com/images/I/31gFK-y4+ZL._AC_SL_QL70_.jpg" data-src="https://images-na.ssl-images-amazon.com/images/I/31gFK-y4+ZL._AC_SL_QL70_.jpg" data-sub-src="https://images-na.ssl-images-amazon.com/images/I/31gFK-y4+ZL._AC_SL_QL70_.jpg" alt="img" />
                    </div>
                  </a>{/* .img-pane */}
                  <div className="meta-pane">
                    <div className="col-1">
                      <div className="star" itemProp="aggregateRating" itemScope itemType="http://schema.org/AggregateRating">
                        <i className="fa fa-star text-gray" /><i className="fa fa-star text-gray" /><i className="fa fa-star text-gray" /><i className="fa fa-star text-gray" /><i className="fa fa-star text-gray" />                                              </div>
                      <div className="comment-fedo">0 bình luận</div>
                    </div>
                    <div className="col-2">
                      <div className="web">
                        <i className="si si-flag-us-circle-16" /> <span className="title">Từ Mỹ</span>
                      </div>
                    </div>
                  </div>{/* .meta-field */}
                  <a className="pd-title href" href="/us/fire-tv-stick-4k-with-all-new-alexa-voice-remote-streaming-media-player-B079QHML21.html"><span className="title-inner">Fire TV Stick 4K with all-new Alexa Voice Remote, streaming media player</span></a>
                  <div className="price" itemProp="offers" itemScope="itemscope" itemType="http://schema.org/Offer">
                    <div className="curr-price totalPrice" itemProp="price" content="Under $25">1,550,618<sup>đ</sup></div>
                    <div className="old-price" />
                  </div>
                  <div className="price-alert">* Giá trọn gói về Việt Nam</div>
                  <div className="ext-pane">
                    <div className="order-time-field" style={{}}>Sản phẩm này hiện chưa được phát hành, quý khách vẫn có thể đặt mua trước. Dự kiến sẽ giao đến địa chỉ quý khách vào khoảng ngày <b className="text-nowrap">10-11-2018</b> đến <b className="text-nowrap">12-11-2018</b> nếu quý khách thanh toán trong hôm nay<br /></div>
                    <div className="feature-field">
                      <ul className="feature-list">
                        <li>Nhập khẩu chính ngạch</li>
                        <li>Bảo vệ người mua, giảm thiểu rủi ro</li>
                        <li>Giao hàng tận nhà, không lo thủ tục</li>
                      </ul>
                    </div>{/* .feature-field */}
                    <div className="merchant-field">
                      Người bán: <span className="name">Amazon.com</span>
                    </div>
                    <div className="control-field">
                      <a className="btn btn-grd-border btn-xs btn-pill quick-view-btn" href="javascript:;" data-asin="B079QHML21" data-merchantid="ATVPDKIKX0DER" data-lang="us" data-url="/Introducing-Fire-TV-Stick-4K-with-All-New-Alexa-Voice-Remote/dp/B079QHML21/ref=sr_1_18?s=electronics&ie=UTF8&qid=1538963894&sr=1-18"><div className="btn-inner">Xem nhanh</div></a>
                      <a className="btn btn-grd-bg btn-xs btn-pill detail-view-btn" href="/us/fire-tv-stick-4k-with-all-new-alexa-voice-remote-streaming-media-player-B079QHML21.html"><div className="btn-inner">Xem chi tiết</div></a>
                    </div>
                  </div>{/* .ext-pane */}
                </div>{/* .panel-inner */}
              </div>{/* .panel-product-v2*/}
            </div>{/* .product-col */}
            <div className="product-col">
              <div className="panel-product-v2 js-get-product-to-asin-us is-checked" id="panel-product" data-asin="B01MAW2294">
                <div className="panel-inner" temprop="item" itemScope="itemscope" itemType="http://schema.org/Product">
                  <a className="img-pane href" itemProp="url" href="/us/google-wifi-system-3-pack-router-replacement-for-whole-home-coverage-nls-1304-25-B01MAW2294.html">
                    <div className="pane-inner">
                      <img className="pd-img img-lazy" src="https://images-na.ssl-images-amazon.com/images/I/212yuX23jeL._AC_SL_QL70_.jpg" data-src="https://images-na.ssl-images-amazon.com/images/I/212yuX23jeL._AC_SL_QL70_.jpg" data-sub-src="https://images-na.ssl-images-amazon.com/images/I/212yuX23jeL._AC_SL_QL70_.jpg" alt="img" />
                    </div>
                    <span className="sale-tag">-14%</span></a>{/* .img-pane */}
                  <div className="meta-pane">
                    <div className="col-1">
                      <div className="star" itemProp="aggregateRating" itemScope itemType="http://schema.org/AggregateRating">
                        <i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star-half-empty  text-yellow" />                                              </div>
                      <div className="comment-fedo">4671 bình luận</div>
                    </div>
                    <div className="col-2">
                      <div className="web">
                        <i className="si si-flag-us-circle-16" /> <span className="title">Từ Mỹ</span>
                      </div>
                    </div>
                  </div>{/* .meta-field */}
                  <a className="pd-title href" href="/us/google-wifi-system-3-pack-router-replacement-for-whole-home-coverage-nls-1304-25-B01MAW2294.html"><span className="title-inner">Google WiFi system, 3-Pack - Router replacement for whole home coverage (NLS-1304-25)</span></a>
                  <div className="price" itemProp="offers" itemScope="itemscope" itemType="http://schema.org/Offer">
                    <div className="curr-price totalPrice" itemProp="price" content="Under $25">8,102,443<sup>đ</sup></div>
                    <div className="old-price">9,236,785<sup>đ</sup></div>
                  </div>
                  <div className="price-alert">* Giá trọn gói về Việt Nam</div>
                  <div className="ext-pane">
                    <div className="order-time-field" style={{display: 'none'}} />
                    <div className="feature-field">
                      <ul className="feature-list">
                        <li>Nhập khẩu chính ngạch</li>
                        <li>Bảo vệ người mua, giảm thiểu rủi ro</li>
                        <li>Giao hàng tận nhà, không lo thủ tục</li>
                      </ul>
                    </div>{/* .feature-field */}
                    <div className="merchant-field">
                      Người bán: <span className="name">Amazon.com</span>
                    </div>
                    <div className="control-field">
                      <a className="btn btn-grd-border btn-xs btn-pill quick-view-btn" href="javascript:;" data-asin="B01MAW2294" data-merchantid="ATVPDKIKX0DER" data-lang="us" data-url="/Google-WiFi-system-3-Pack-replacement/dp/B01MAW2294/ref=sr_1_19?s=electronics&ie=UTF8&qid=1538963894&sr=1-19"><div className="btn-inner">Xem nhanh</div></a>
                      <a className="btn btn-grd-bg btn-xs btn-pill detail-view-btn" href="/us/google-wifi-system-3-pack-router-replacement-for-whole-home-coverage-nls-1304-25-B01MAW2294.html"><div className="btn-inner">Xem chi tiết</div></a>
                    </div>
                  </div>{/* .ext-pane */}
                </div>{/* .panel-inner */}
              </div>{/* .panel-product-v2*/}
            </div>{/* .product-col */}
          </div>{/* .wrap-product-col-v2 */}
        </div>{/* .block-main */}
        <div className="block-foot">
          <nav className="pagination-nav-v2">
            <ul className="page-list" style={{paddingLeft: 0, marginTop: 0, marginBottom: 0}}>
              <li className="is-active"><a href="javascript:;">1</a></li><li><a href="/us/s/cat/?rh=n:172282&page=2&ie=UTF8&qid=1538963894">2</a></li><li><a href="/us/s/cat/?rh=n:172282&page=3&ie=UTF8&qid=1538963894">3</a></li><li className="dots">...</li><li><a href="javascript:;">400</a></li><li><a className="next-btn" href="/us/s/cat/?rh=n:172282&page=2&ie=UTF8&qid=1538963894" /></li>                      </ul>
          </nav>{/* .pagination-nav-v2 */}
        </div>{/* .block-foot */}
      </section>{/* .category-block-v2 */}
    </div>{/* .container-col */}
  </div>
</div>


        )
        
    }
}
function mapStateToProps(state){
  
    return  state;
}
const connectedContent=connect(mapStateToProps)(Content);
export { connectedContent as Content } 