import React from "react";
import { connect } from "react-redux";

class ShowComent extends React.Component{
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
            <section style={{ fontSize: 14 }} className="product-tab-block-v2 pd-comment-block" id="binh-luan-tab">
                                <div className="block-head" style={{ width: 838 }}>
                                    <div className="head-title-col">
                                        <div className="block-title">Bình luận &amp; đánh giá</div>
                                    </div>
                                    <div className="head-control-col">
                                    </div>
                                </div>{/* .block-head */}
                                <div className="block-main">
                                    <ul className="tab-title-list" style={{ paddingLeft: 0 }}>
                                        <li className="is-active" onClick={()=>this.handleClick()} data-tab="#comment-quan-tam-nhat-tab">Quan tâm nhất</li>
                                        <li onClick={()=>this.handleClick()} data-tab="#comment-moi-nhat-tab">Mới nhất</li>
                                    </ul>
                                    <div id="commentList" data-sort data-page={2} className="comment-tab is-show">
                                        <div className="comment-panel-wrap">
                                            <div className="comment-panel is-checked">
                                                <div className="panel-head">
                                                    <div className="head">
                                                        <span className="star">
                                                            <i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" />          </span>
                                                        <span className="title" itemProp="name">Bietet meinem IPad AIR sicheren Halt und sieht schick aus</span>
                                                    </div>
                                                    <meta itemProp="datePublished" className="meta" content="2018-02-01" />
                                                    <div className="meta" itemProp="author">By J. Ehrhardt on February 01, 2018</div>
                                                </div>
                                                <div className="panel-main">
                                                    <div className="content-pane">
                                                        <div className="content-field" itemProp="description">
                                                            <b>Sonderpreis für eine begrenzte Zeit: </b>Multi-Winkel ipad tablett tablet ständer halter Multi-Winkel 12.9 and halterung für ipad pro 10 5, iPad pro 2018 12,9 zoll, 10 zoll, surface book, iphone ipad, 10-zoll tablets. Tablet dockingstation für ipad pro, ipad air 2, tab samsung, samsung tablet, ipad mini. IPad tisch tablet ständer tischständer tablet für 7 zoll, 10 zoll, samsung galaxy tab 7 s3, iPad pro 10.5 inch, ipad air2, 10-zoll tablet, i phone 6 plus, samsung galaxy tab a6.<br /><br />• Farbe: Der Tablet Ständer sieht in Wirklichkeit noch schöner als im Bild, modern, schick, einfach. ipad pro tablet tisch pad halterung 12.9 tischhalterung staender tablet halter schreibtisch stand für ipad, 8 zoll, iphone, 12 zoll, tab s2, samsung galaxy tab s3, samsung galaxy s7, iphone 7 plus, galaxy tab a, 9.7 zoll, 10 zoll<br />• Qualität des Tablet Ständer: Dieser Tablet Ständer ist aus Aluminium-Legierung mit guter Qualtität; umweltfreundliche Stoffe verbraucht.<br />• kleiner, feiner und tragbarer Tablet Ständer.<br />• Niedlicher "Haken"; und es gibt Gumminoppen auf der Unterseite des Tablet Ständer:<br />1.Ihr Tablet vor Kratzern schützen.<br />2.Ihr Tablet vor Rutschen schützen.<br />• Dort, wo das Tablet liegt, ist breit genug, wenn auch mit einer Schutzhülle.<br />• Der Tablet Ständer passt sehr gut zu Ihrem Ladekabel.<br /><br /><b>Kompatibilität:</b><br />Der Tablet Ständer ist kompatibel mit den meisten Tablet, unterstützt Sie ideal beim Filme schauen und Lesen mit Handy am Tisch.<br /><br /><b>Sowie：</b><br />• Apple: iPod Ipad 1 2 3 Air, ipad mini 1 2 3 4.<br />• Samsung/Huawei/E-Reader/Fire Tablet<br />• Nintendo Switch Tablet<br /><br /><b>Inkl:</b><br />• 1 x Lamicall-Tablet Ständer. Tablett handy multi winkel halter tablet handyhalter tisch staender tischhalterung halterung stand fuer tablett, iphone 7 plus, ipad pro 12.9, samsung S7, 11 zoll, iPad pro 10.5 inch, 12 zoll            </div>
                                                        <div className="expand-comment-btn">+ Hiện nội dung</div>
                                                    </div>{/* .content-pane */}
                                                </div>{/* .panel-main */}
                                            </div>{/* .comment-panel */}
                                            <div className="comment-panel is-checked">
                                                <div className="panel-head">
                                                    <div className="head">
                                                        <span className="star">
                                                            <i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" />          </span>
                                                        <span className="title" itemProp="name">Bin vollends zufrieden, auch mit dem grossen iPad Pro</span>
                                                    </div>
                                                    <meta itemProp="datePublished" className="meta" content="2017-11-04" />
                                                    <div className="meta" itemProp="author">By Di Christoph Ennemoser on November 04, 2017</div>
                                                </div>
                                                <div className="panel-main">
                                                    <div className="content-pane">
                                                        <div className="content-field" itemProp="description">
                                                            Habe den IPad Ständer gekauft um mein IPad schön auf einem Sideboard zu stellen. Kaufkriterium war für mich das schicke und schlichte Design. Ich bin echt begeistert von dem Ständer, da er echt sehr wertig verarbeitet ist, mein IPad Air passt hervorragend rein und beides zusammen sieht klasse aus. Die Fläche auf die  das IPad gelegt wird ist verstellbar. Durch die vier Gummistreifen wird das IPad vor Kratzern geschützt. Ich bin wirklich sehr zufrieden mit dem Produkt und kann es weiterempfehlen            </div>
                                                        <div className="expand-comment-btn">+ Hiện nội dung</div>
                                                    </div>{/* .content-pane */}
                                                </div>{/* .panel-main */}
                                            </div>{/* .comment-panel */}
                                            <div className="comment-panel is-checked">
                                                <div className="panel-head">
                                                    <div className="head">
                                                        <span className="star">
                                                            <i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" />          </span>
                                                        <span className="title" itemProp="name">Nützliches Tabet-Zubehör</span>
                                                    </div>
                                                    <meta itemProp="datePublished" className="meta" content="2017-12-19" />
                                                    <div className="meta" itemProp="author">By Schwatzmoserer on December 19, 2017</div>
                                                </div>
                                                <div className="panel-main">
                                                    <div className="content-pane">
                                                        <div className="content-field" itemProp="description">
                                                            Ich verwende den Ständer mit einem iPad Pro 12,9, es gibt keine Probleme. Weder ist es kippelig (gilt natürlich nur wenn es quer steht), noch kann ich sonstige Nachteile finden.<br />Die Winkelverstellung ist schwergängig, das sehe ich aber als Vorteil.<br /><br />Mein iPad ist mit einer Apple Silikonhülle geschützt, auch damit passt es hervorragend in den Ständer.<br /><br />Selbiges gilt für mein iPhone 7 plus, da passt es auch im Hochformat.<br /><br />Ich kann den Ständer uneingeschränkt empfehlen.            </div>
                                                        <div className="expand-comment-btn">+ Hiện nội dung</div>
                                                    </div>{/* .content-pane */}
                                                </div>{/* .panel-main */}
                                            </div>{/* .comment-panel */}
                                            <div className="comment-panel is-checked">
                                                <div className="panel-head">
                                                    <div className="head">
                                                        <span className="star">
                                                            <i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" />          </span>
                                                        <span className="title" itemProp="name">Stabil, solide, elegant.</span>
                                                    </div>
                                                    <meta itemProp="datePublished" className="meta" content="2017-12-11" />
                                                    <div className="meta" itemProp="author">By Leseratte on December 11, 2017</div>
                                                </div>
                                                <div className="panel-main">
                                                    <div className="content-pane">
                                                        <div className="content-field" itemProp="description">
                                                            Auf meinem begrenzten Schreibtischplatz hatte ich das Problem daß das unheimlich glatte Samsung TAB S2 auf licht unebenen Teilflächen ständig ins Rutschen kam.<br />Ich kaufte daher diesen Tab-Ständer als Ausweg. Im Ergebnis bin ich äußerst zufrieden mit meiner Entscheidung. Zum einen erhielt ich einen ausgesprochen formschönen Ständer aus pulverbeschichtetem Aluminiuml mit einem hervorragenden Kippgelenk das in jeder gewünschten Stellung standfest bleibt. Die mit Gummi ausgekleideten Greifauflagen halten auch das glatte TAB sicher ohne seitliches Verrutschen. Das TAB kann sowohl senkrecht wie auch quer sicher aufgestellt werden. Die Bedienung des Touchscreens ist einwandfrei und ohne Verwackelnder Konstruktion durchzuführen. Gleichzeitig erhielt ich einen geringeren Platzverbrauch auf dem Schreibtisch.<br />Kann ich jederzeit empfehlen.            </div>
                                                        <div className="expand-comment-btn">+ Hiện nội dung</div>
                                                    </div>{/* .content-pane */}
                                                </div>{/* .panel-main */}
                                            </div>{/* .comment-panel */}
                                            <div className="comment-panel is-checked">
                                                <div className="panel-head">
                                                    <div className="head">
                                                        <span className="star">
                                                            <i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" />          </span>
                                                        <span className="title" itemProp="name">Ein sehr preisgünstiger , nützlicher , stabiler Ständer für mein  TABLET.</span>
                                                    </div>
                                                    <meta itemProp="datePublished" className="meta" content="2018-07-23" />
                                                    <div className="meta" itemProp="author">By H.J. E on July 23, 2018</div>
                                                </div>
                                                <div className="panel-main">
                                                    <div className="content-pane">
                                                        <div className="content-field" itemProp="description">
                                                            Stabile Halterung an einem Stück. Solide, gerade und mit Ersatzpatches.<br />Aus Blech/Aluminium/Stahl (?)geformt aber nicht klobig sondern leicht und elegant. Zur Schonung von iPad und Tisch kleben kleine Patches an der Unterseite und der Halterung.<br />Kam gut verpackt und schnell an.<br /><br />Man sollte wissen, dass die Halterung nicht höhenverstellbar ist. Allerdings lässt sich die Halterung positionieren, es ist hierfür ein Gelenk eingearbeitet.<br />Aber zur Lagerung des iPads super geeignet - das iPad kann nicht von der Tischkante fallen, unter Unterlagen verschwinden oder was auch immer. Und man kann bequem Filme/Videos gucken. Quer- und hochformatgeeignet. Sogar mit Schutzhülle passt mein iPad in die Halterung.<br /><br />Auch die Bedienung des Touch-Displays ist möglich, ohne dass die Halterung gleich umkippt. Wer jedoch ziemlich grobmotorisch unterwegs ist, dem kann dann auch nicht mehrgeholfen werden. Mit grober Gewalt kippt Vieles um. ;-)<br /><br />Ich habe auch noch eine Halterung für iPhone erstanden und bin mit beiden Halterungen hochzufrieden!            </div>
                                                        <div className="expand-comment-btn">+ Hiện nội dung</div>
                                                    </div>{/* .content-pane */}
                                                </div>{/* .panel-main */}
                                            </div>{/* .comment-panel */}
                                            <div className="comment-panel is-checked">
                                                <div className="panel-head">
                                                    <div className="head">
                                                        <span className="star">
                                                            <i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" />          </span>
                                                        <span className="title" itemProp="name">Stabil und stylisch</span>
                                                    </div>
                                                    <meta itemProp="datePublished" className="meta" content="2017-11-15" />
                                                    <div className="meta" itemProp="author">By Matthias on November 15, 2017</div>
                                                </div>
                                                <div className="panel-main">
                                                    <div className="content-pane">
                                                        <div className="content-field" itemProp="description">
                                                            Ich habe diesen Ständer für mein Tablet  erworben da die Standfunktion meiner  Tablet -Tasche  mir zu wackelig / sturzgefährlich war .<br />Der Ständer ist stabil , das Neigungs-Gelenk schön  schwergängig und er ist optisch sehr ansprechend . Das Tablet liegt sicher hinter den Haltenasen des Ständers und der Ständer steht sicher und verwindungssteif . .<br /><br />Ich empfehle diesen Ständer ohne Einschränkungen .            </div>
                                                        <div className="expand-comment-btn">+ Hiện nội dung</div>
                                                    </div>{/* .content-pane */}
                                                </div>{/* .panel-main */}
                                            </div>{/* .comment-panel */}
                                            <div className="comment-panel is-checked">
                                                <div className="panel-head">
                                                    <div className="head">
                                                        <span className="star">
                                                            <i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" />          </span>
                                                        <span className="title" itemProp="name">Geniales Teil!!!</span>
                                                    </div>
                                                    <meta itemProp="datePublished" className="meta" content="2018-01-01" />
                                                    <div className="meta" itemProp="author">By gerrycat on January 01, 2018</div>
                                                </div>
                                                <div className="panel-main">
                                                    <div className="content-pane">
                                                        <div className="content-field" itemProp="description">
                                                            Der Ständer ist super verarbeitet und steht stabil und rutschfest auf dem Tisch, die Verstellung geht leicht und hält auch bei Bedienung des Tabletts. Mein Huawei 10 Zoll Me3 Tablet passt hochkant oder quer perfekt darauf, ohne dass der Ständer in die eine oder andere Richtung beim Bedienen wackelt oder Übergewicht bekommt.<br />Klebepads sind als Ersatz dabei, falls die irgendwann mal abgenutzt sein sollten.<br />Von mir eine ganz klare Kaufempfehlung.            </div>
                                                        <div className="expand-comment-btn">+ Hiện nội dung</div>
                                                    </div>{/* .content-pane */}
                                                </div>{/* .panel-main */}
                                            </div>{/* .comment-panel */}
                                            <div className="comment-panel is-checked">
                                                <div className="panel-head">
                                                    <div className="head">
                                                        <span className="star">
                                                            <i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" />          </span>
                                                        <span className="title" itemProp="name">Herrlicher Spaß mit Nutzwert</span>
                                                    </div>
                                                    <meta itemProp="datePublished" className="meta" content="2018-03-01" />
                                                    <div className="meta" itemProp="author">By BCM on March 01, 2018</div>
                                                </div>
                                                <div className="panel-main">
                                                    <div className="content-pane">
                                                        <div className="content-field" itemProp="description">
                                                            Ich könnte mich jetzt über die recht stabile Verarbeitung, den verstellbaren Neigungswinkel auslassen....<br />Aber viel wichtiger ist: es erfüllt genau den Zweck den es soll. Nämlich das iPad über einen längeren Zeitraum sicher zu parken.<br />Man hat sofort Zugriff und es kann dabei trotzdem ungestört weiter geladen werden.<br />Der ergonomische Gebrauch ist dadurch auch gesichert. Meine Haltung ist innerhalb von nur einer Woche Gebrauch deutlich besser geworden.<br />Man kann sich noch so bemühen, wenn man das Teil in Hand/Schoss oder Tisch hat, senkt man unwillkürlich das Haupt.<br /><br />Was es NICHT ist: es ist keine FIXIERUNG, d.h. trotz aller Stabilität ist es trotzdem nur ein "Parkplatz" und keine Fixverankerung.<br /><br />Für mich persönlich einer der bisher besten Käufe!!!            </div>
                                                        <div className="expand-comment-btn">+ Hiện nội dung</div>
                                                    </div>{/* .content-pane */}
                                                </div>{/* .panel-main */}
                                            </div>{/* .comment-panel */}
                                            <div className="comment-panel is-checked">
                                                <div className="panel-head">
                                                    <div className="head">
                                                        <span className="star">
                                                            <i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" />          </span>
                                                        <span className="title" itemProp="name">Um Filme zu schauen - stabil und eingestellte Position bleibt erhalten</span>
                                                    </div>
                                                    <meta itemProp="datePublished" className="meta" content="2018-02-10" />
                                                    <div className="meta" itemProp="author">By Amazon Customer on February 10, 2018</div>
                                                </div>
                                                <div className="panel-main">
                                                    <div className="content-pane">
                                                        <div className="content-field" itemProp="description">
                                                            Herrliches Gadget, das mir jeden Tag wieder Spaß macht. Wahrscheinlich braucht man dieses Ding nicht wirklich aber falls das iPad, sowie bei mir, hin und wieder oder auch im Urlaub als kurzzeitiger TV-Ersatz dient oder man kurze Mails mit einer externen Tastatur schreibt, ist der Ständer von hohem Nutzwert. Material, Verarbeitung und Design sind einwandfrei, ebenso die Funktion. Besonders das Design spricht mich an, sieht doch das iPad damit wie ein Mini-iMac für Arme aus xD... Auch meine Kinder machen sich immer wieder darüber lustig und so hat jeder seinen Spaß. Und weil es so schön war, habe ich mir darauf auch noch das "Ständerchen" für das iPhone gekauft, das nun WIRKLICH niemand mehr braucht, erst recht wie ein ganz armseliges iMacchen nach dem Vollwaschgang aussieht und gerade deswegen besonders viel Spaß macht... Auch für den Preis besonders klare Kaufempfehlung für dieses Tool!            </div>
                                                        <div className="expand-comment-btn">+ Hiện nội dung</div>
                                                    </div>{/* .content-pane */}
                                                </div>{/* .panel-main */}
                                            </div>{/* .comment-panel */}
                                            <div className="comment-panel is-checked">
                                                <div className="panel-head">
                                                    <div className="head">
                                                        <span className="star">
                                                            <i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" />          </span>
                                                        <span className="title" itemProp="name">Eine Tablet Halterung wie es sein sollte</span>
                                                    </div>
                                                    <meta itemProp="datePublished" className="meta" content="2018-09-23" />
                                                    <div className="meta" itemProp="author">By Don Ralfini on September 23, 2018</div>
                                                </div>
                                                <div className="panel-main">
                                                    <div className="content-pane">
                                                        <div className="content-field" itemProp="description">
                                                            Ich habe den Ständer gekauft, um mein Samsung Note 10.1 2014 darauf abzulegen, um Filme zu schauen.<br />Dafür ist der Ständer perfekt. Der eingestellte Neigungswinkel bleibt erhalten, d.h. der Arm sackt nicht mit der Zeit ab.<br />In einer Rezension stand, das der Ständer beim Tippen auf einem Tablet nachschwingt. Dies ist in der Tat der Fall. Möchte man mit dem Tablet arbeiten, ist wahrscheinlich eine andere Lösung notwendig.            </div>
                                                        <div className="expand-comment-btn">+ Hiện nội dung</div>
                                                    </div>{/* .content-pane */}
                                                </div>{/* .panel-main */}
                                            </div>{/* .comment-panel */}
                                        </div>{/* .comment-panel-wrap */}
                                        <div className="btnClone btn-wrap">
                                            <button style={{ color: '#fff', height: 40, fontSize: 16, padding: '0 30px' }} type="button" data-sort-by className="btn view-more-comment-btn btn-pill btn-grd-bg btn-inner btn-grd-border" id="viewMoreComment" href="javascript:;">Xem thêm bình luận</button>
                                        </div>
                                    </div>{/* .comment-tab */}
                                </div>{/* .block-main */}
                            </section>
        )
        
    }
}
function mapStateToProps(state){
  
    return  state;
}
const connectedContent=connect(mapStateToProps)(ShowComent);
export { connectedContent as ShowComent } 