import React, { memo } from 'react'

export const Footer = memo(props => {
    const filterBtns = [
        {
            title: 'All',
            isActive: true,
            onClick: () => { },
            link: '/all'
        },
        {
            title: 'Actived',
            isActive: false,
            onClick: () => { },
            link: '/active',
        },
        {
            title: 'Completed',
            isActive: false,
            onClick: () => { },
            link: '/completed'
        }
    ];
    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>2</strong>
                <span> </span>
                <span>items</span>
                <span> left</span>
            </span>

            <ul className="filters">
                {
                    filterBtns.map(btn => <FilterBtn key={`btn${btn.title}`} {...btn} />)
                }
            </ul>
            <button className="clear-completed">Clear completed</button>
        </footer>
    )
})

const FilterBtn = memo(props => {
    const { title, isActive, link } = props;
    return (
        <>
            <li>
                <a
                    href={`#${link}`}
                    className={isActive ? "selected" : ''}
                    onClick={() => { }}
                >
                    {title}
                </a>
            </li>
        </>
    );
})
