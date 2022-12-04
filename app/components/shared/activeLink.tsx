import React from "react";
import Link from "next/link";
import {useRouter} from "next/router";

interface Props {
    children: React.ReactElement | (({active}: { active: boolean }) => React.ReactElement),
    href: string,
    as?: string
}

const ActiveLink = ({children, href, as, ...props}: Props) => {

    const {asPath} = useRouter()
    console.log('href:',href ,"as path:", asPath)

    const active = asPath === href || asPath === as;

    return (
        <Link href={href} as={as} {...props}>
            {
                typeof children === "function"
                    ? children({active})
                    : children
            }
        </Link>
    )
}

export default ActiveLink;