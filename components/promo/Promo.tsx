import { CSSProperties } from "react"
import Image from 'next/image'
import dishImage from '../../assets/dish.jpg'
import quotationMark from '../../assets/quotation-mark.svg'

export const Promo = () => {
    return (
        <div style={promoStyle}>
            <div style={promoImage}>
            </div>
            <div style={promoText}>
                <Image alt="Quotation mark" src={quotationMark} width={50} height={50} />
                <p> 
                Tongstrelende gerechten als kreeftschotels, oester- en visbereidingen, salades en pasta's, geflankeerd door exclusieve wijnen, kazen en fijne vleeswaren. 
                </p>
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