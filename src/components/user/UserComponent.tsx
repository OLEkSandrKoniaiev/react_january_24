import React, {FC, ReactNode} from 'react';
import {IUserModel} from "../../models/IUserModel";
import styles from "../../styles/User.module.css"

type IProps = { user: IUserModel }
    & { children?: ReactNode }
    & { clickHandler: (id: number) => void };

const UserComponent: FC<IProps> = ({
                                       user,
                                       clickHandler
                                   }) => {

    return (
        <div className={styles.userBlock}>
            <p>ID: {user.id}</p>
            <h2>Full name: {user.firstName} {user.maidenName} {user.lastName}</h2>
            <p>Age: {user.age} Gender: {user.gender}</p>
            <p>Email & phone: {user.email} {user.phone}</p>
            <h4>Username & password: {user.username} {user.password}</h4>
            <p>Birth date : {user.birthDate}</p>
            <p>Blood group: {user.bloodGroup}</p>
            <p>Height & weight: {user.height}sm {user.weight}kg</p>
            <p>Eye color: {user.eyeColor}</p>
            <p>Hair: {user.hair?.color} & {user.hair?.type}</p>
            <p>Domain: {user.domain} IP: {user.ip}</p>
            <span>Address:</span>
            <ul>
                <li>Address: {user.address?.address}</li>
                <li>City: {user.address?.city}</li>
                <li>Coordinates:
                    <ul>
                        <li>lat: {user.address?.coordinates?.lat}</li>
                        <li>lng: {user.address?.coordinates?.lng}</li>
                    </ul>
                </li>
                <li>Postal code: {user.address?.postalCode}</li>
                <li>State: {user.address?.state}</li>
            </ul>
            <p>MAC Address: {user.macAddress}</p>
            <p>University: {user.university}</p>
            <span>Bank:</span>
            <ul>
                <li>Card expire: {user.bank?.cardExpire}</li>
                <li>Card number: {user.bank?.cardNumber}</li>
                <li>Card type: {user.bank?.cardType}</li>
                <li>Currency: {user.bank?.currency}</li>
                <li>iban: {user.bank?.iban}</li>
            </ul>
            <span>Company:</span>
            <ul>
                <li>Address:<ul>
                    <li>Address: {user.company?.address?.address}</li>
                    <li>City: {user.company?.address?.city}</li>
                    <li>Coordinates:
                        <ul>
                            <li>lat: {user.company?.address?.coordinates?.lat}</li>
                            <li>lng: {user.company?.address?.coordinates?.lng}</li>
                        </ul>
                    </li>
                    <li>Postal code: {user.company?.address?.postalCode}</li>
                    <li>State: {user.company?.address?.state}</li>
                </ul></li>
                <li>Department: {user.company?.department}</li>
                <li>Name: {user.company?.name}</li>
                <li>Title: {user.company?.title}</li>
            </ul>
            <p>EIN: {user.ein} SSN: {user.ssn}</p>
            <p>User Agent: {user.userAgent}</p>
            <span>Crypto:</span>
            <ul>
                <li>Coin: {user.crypto?.coin}</li>
                <li>Wallet: {user.crypto?.wallet}</li>
                <li>Network: {user.crypto?.network}</li>
            </ul>
            <p><img src={user.image} alt={user.username}/></p>
            <button onClick={() => {
                clickHandler(user.id);
            }} className={styles.postButton}>Вивести публікації користувача
            </button>
        </div>
    );
};

export default UserComponent;
