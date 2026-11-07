import Image from "next/image";
import logo from "../../assets/capecod-white.svg";
import { CONTACT } from "../../api/contact";
import { useTranslation } from "../../i18n/useTranslation";
import styles from './Footer.module.scss';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className={styles.footer}>
            <div className={styles.inner}>
                <div className={styles.brand}>
                    <Image src={logo} alt="" width={36} height={30} />
                    <span>Cape Cod</span>
                </div>
                <p className={styles.details}>
                    {CONTACT.street}, {CONTACT.postalCode} {CONTACT.city}
                    <span aria-hidden> · </span>
                    <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
                    <span aria-hidden> · </span>
                    <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                </p>
                <p className={styles.legal}>
                    © Cape Cod · {t.contact.companyNumber} {CONTACT.companyNumber}
                </p>
            </div>
        </footer>
    );
}

export default Footer;
