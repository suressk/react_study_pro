import React, { useState, useEffect } from 'react'

function getCurDate() {
    const date = new Date(),
        year = date.getFullYear(),
        month = date.getMonth() + 1,
        day = date.getDate(),
        hour = date.getHours(),
        minute = date.getMinutes(),
        second = date.getSeconds();
    return `${year}-${month}-${day} ${hour}:${minute < 10 ? '0' + minute : minute}:${second < 10 ? '0' + second : second}`;
}

export default function Header() {
    const [currentDate, setCurrentDate] = useState(getCurDate());
    // eslint-disable-next-line no-unused-vars
    let [timer, setTimer] = useState(null);
    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        timer = setInterval(() => {
            setCurrentDate(getCurDate())
        }, 1000);
        return () => {
            clearInterval(timer);
        }
    }, [])
    return (
        <div className="header">
            <ul className="top-menu">
                <li className="menu-item back">
                    <i className="iconfont iconzuojiantou" />
                </li>
                <li className="menu-item rest-title">
                    <i className="iconfont iconcertification" />
                    <span className="title">请假详情</span>
                </li>
                <li className="menu-item feedback">
                    反馈
                </li>
            </ul>
            <div className="rest-state">
                <div className="state">
                    <span className="approve">
                        <i className="iconfont iconcomplete" />
                        审批已通过
                    </span>
                    <span className="is-completed">已完成</span>
                </div>
                <div className="progress">
                    <span className="current-date">当前时间：{currentDate}</span>
                </div>
            </div>
        </div>
    )
}
