"use client";

import { useState, useEffect } from "react";

export const formatter = new Intl.NumberFormat('cs-CZ', {
    style: 'currency',
    currency: 'CZK',
  });
  const moneyFormat = formatter.format(7360);

interface CurrencyProps {
    value?: string | number;
}

const Currency: React.FC<CurrencyProps> = ({
    value
}) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }
    return ( 
        <div>
            {formatter.format(Number(value))}
        </div>
     );
}
 
export default Currency;