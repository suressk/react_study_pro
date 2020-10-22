import React from 'react'
import './Pager.scss'

/**
 * 分页
 * @param {*} props 
 * 1. current - 当前页
 * 2. total - 总条数
 * 3. pageSize - 每页条数
 * 4. showNums - 显示页码数
 */
export default function Pager(props) {
    const totalPage = getTotalPage(props);
    const min = getMinNum(props),
        max = getMaxNum(props);
    let nums = [];
    for (let i = min; i <= max; i++) {
        nums.push(
            <span
                className={
                    props.current === i ? "pager_item active" : "pager_item"
                }
                key={i + 12306}
                onClick={() => props.toPage && props.toPage(i)}
            >{i}</span>
        )
    }
    return (
        <>
            <span
                className={props.current === 1 ? "pager_item disabled" : "pager_item"}
                onClick={() => {
                    if(props.current === 1) return;
                    props.toPage && props.toPage(1);
                }}
                >首页</span>
            <span
                className={props.current === 1 ? "pager_item disabled" : "pager_item"}
                onClick={() => {
                    if(props.current > 1){
                        props.toPage && props.toPage(props.current - 1);
                    }
                }}
                >上一页</span>

                {/* 数字区 */}
                {nums}

            <span
                className={props.current === totalPage ? "pager_item disabled" : "pager_item"}
                onClick={() => {
                    if(props.current < totalPage){
                        props.toPage && props.toPage(props.current + 1);
                    }
                }}
                >下一页</span>
            <span
                className={props.current === totalPage ? "pager_item disabled" : "pager_item"}
                onClick={() => {
                    if(props.current === totalPage) return;
                    props.toPage && props.toPage(totalPage);
                }}
                >尾页</span>
            <span className="pager_current">{props.current}</span>/<span className="pager_total">{totalPage}</span>
        </>
    )
}

/**
 * 获取总页数
 * @param {*} props 
 */
function getTotalPage(props) {
    return Math.ceil(props.total / props.pageSize);
}

/**
 * 最小页码
 * @param {*} props 
 */
function getMinNum(props){
    const offset = Math.floor(props.showNums / 2);
    if(props.current <= 3){
        return 1;
    }
    return (props.current - offset);
}

/**
 * 最大页码
 * @param {*} props 
 */
function getMaxNum(props){
    const total = getTotalPage(props);
    const offset = Math.floor(props.showNums / 2);
    if(props.current >= total - offset){
        return total;
    }
    return (props.current + offset);
}
