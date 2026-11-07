import { Fade, Slide } from "react-awesome-reveal";
import { Menu } from "../../types/Menu";
import { useTranslation } from "../../i18n/useTranslation";
import DishMenuCard from "./DishMenuCard";
import DishSetCard from "./DishSetCard";
import styles from './MenuCard.module.scss';

const MenuCard = (props: { menu: Menu }) => {
    const menu = props.menu;
    const { t } = useTranslation();
    
    return (
        <>
            <div className={styles.menuCard}>
                <Fade triggerOnce damping={0.05} cascade>
                <p style={{textAlign: 'center'}}> {menu.description} </p>
                    {
                        menu.dishSets.map((ds, i) => (
                            <DishSetCard key={`dish-set-card-${i}`} dishSet={ds} />
                        ))
                    }

                  {menu.dishMenus.length > 0 && (
                    <>
                      <h2 className={styles.menusTitle}> {t.menu.menus} </h2>
                      {
                        menu.dishMenus.map((dm, i) => (
                          <DishMenuCard key={`dish-menu-card-${i}`} dishMenu={dm} />
                        ))
                      }
                    </>
                  )}

                </Fade>
            </div>
        </>
    );
}

export default MenuCard;