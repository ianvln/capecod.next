import { useEffect, useState } from "react";
import { getShopTime, ShopTime } from "../../types/general/util/time/time";

/**
 * The shop's current local time, refreshed every minute.
 * Returns null during server rendering and the first client render to avoid hydration mismatches.
 */
const useShopTime = (): ShopTime | null => {
    const [now, setNow] = useState<ShopTime | null>(null);

    useEffect(() => {
        const update = () => setNow(getShopTime());
        update();
        const interval = window.setInterval(update, 60_000);
        return () => window.clearInterval(interval);
    }, []);

    return now;
}

export default useShopTime;
