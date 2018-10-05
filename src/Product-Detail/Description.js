import React from "react";
import { connect } from "react-redux";
class Description extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: true,
            loading: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit() {
        this.setState({
            login: false
        })
        console.log("Hello World")
    }
    render() {

        return (
            <section className="product-tab-block-v2 pd-desc-block" id="mo-ta-tab">
                <div className="block-head" style={{ width: 838 }}>
                    <div className="head-title-col">
                        <div style={{ fontSize: 14 }} className="block-title">Mô tả</div>
                    </div>
                    <div className="head-control-col">
                    </div>
                </div>{/* .block-head */}
                <div className="block-main" style={{ fontSize: 14 }}>
                    <p>● 【Einstellbar Tablet Ständer:】 Mehrere Sichtwinkel, die Ihren unterschiedlichen Bedürfnissen entsprechen, stehen Ihnen zur Verfügung, sodass dieser Tablet Ständer praktisch für Sie ist. Sparen Sie 20 % beim Kauf von Lamicall Handy Ständer (Silber) wenn Sie 1 oder mehrere Lamicall iPad Ständer aus dem Angebot von LamicallDirect erwerben!</p>
                    <p>● 【Haltbare gummierte Auflageflächen:】 Beim Video-Chatten (z.B. FaceTime) und Videos schauen (z.B. Videos auf YouTube) bleibt der Lamicall-Ständer stabil stehend. Mit niedrigem Schwerpunkt und genug breitem Haken wird Ihr relativ großes Gerät vor Kratzern und Rutschen geschützt.</p>
                    <p>● 【Kompatibilität:】 Kompatibel mit 4 bis 13 Zoll Geräte wie z.B. Neu iPad Pro 2018, iPad Air, Surface Pro, Nintendo Switch, Samsung Tablet, wenn auch mit Schutzhüllen. Wenn das Gerät ist größer als 12'' (z. B. iPad Pro 12,9 ''), nur Set horizontal, es funktioniert auch gut. Der Lamicall-Ständer spielt eine wichtige Rolle in Ihrem Büro, Ihrer Küche und auf Ihrem Nachttisch.</p>
                    <p>● 【Präzise Verarbeitung:】 Aluminium-Legierung, glatte Kante, geringes Gewicht, leicht tragbar; hochkompatibel mit Alle Tablet.</p>
                    <p>● 【Was Sie erhalten:】 Ein Lamicall S1 Ständer, sowie unsere Lifetime Garantieservices. Um Ihnen eine volle Rückerstattung oder einen nagelneuen Wiedereinbau anzubieten, wenn Sie nicht mit ihm zufrieden sind.</p>
                </div>
            </section>
        )

    }
}
function mapStateToProps(state) {

    return state;
}
const connectedContent = connect(mapStateToProps)(Description);
export { connectedContent as Description } 