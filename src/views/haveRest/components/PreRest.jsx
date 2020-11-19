import React from 'react'

export default function PreRest() {
    return (
        <div className="pre-rest">
            <div className="rest-type">
                <span className="title">请假类型：</span>
                <span className="des">外出申请（云南省</span>
                <span className="title">需要离校：</span>
                <span className="des">离校内）</span>
            </div>
            <div className="rule">
                <span className="title">销假规则：</span>
                <span className="notice">离校请假需要销毁，非离校请假无需销假</span>
                <span className="see-detail">查看&gt;</span>
            </div>
            <div className="real-interval">
                <span className="title">实际休假时间：</span>
                <span className="notice">11-13 07:00 ~ 11-13 22:39（共15小时40分钟）</span>
            </div>
        </div>
    )
}
