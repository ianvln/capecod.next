import { CSSProperties } from "react"
import Image from 'next/image'
import dishImage from '../../assets/dish.jpg'
import quotationMark from '../../assets/quotation-mark.svg'
import { Language } from "../../types/general/util/lang/language"

interface PromoProps {
    language: Language;
}

export const Promo = (props: PromoProps) => {
    return (
        <div style={promoStyle}>
            <div style={promoImage}>
            </div>
            <div style={promoText}>
                <Image alt="Quotation mark" src={quotationMark} width={50} height={50} />
                {props.language === Language.Dutch && (<p>  Tongstrelende gerechten als kreeftschotels, oester- en visbereidingen, salades en pasta&apos;s, geflankeerd door exclusieve wijnen, kazen en fijne vleeswaren. </p>)}
                {props.language === Language.French && (<p> Des plats délicieux tels que des plateaux de homard, des préparations d&apos;huîtres et de poissons, des salades et des pâtes, accompagnés de vins exclusifs, de fromages et de charcuteries fines. </p>)}
            </div>
        </div>
    )
}

const promoStyle: CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    height: 850,
    borderBottom: '4px solid #c59d5f'
}

const promoImage: CSSProperties = {
    background: `url(${dishImage.src})`,
    backgroundSize: 'cover',
    flex: '1 0 50%',
    minWidth: 400
}

const promoText: CSSProperties = {
    padding: 40,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    flex: '1 0 50%',
    fontSize: '1.2rem'
}