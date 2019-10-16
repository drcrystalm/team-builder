import React from "react"

const Member = props => {
    console.log(props)
    return (
        <div className='member-list'>
            {props.memberList.map((member, index) => {
                return (
                    <div className='member' key={index}>
                        <h3>{member.name}</h3>
                        <h4>{member.email}</h4>
                        <h4>{member.role}</h4>
                    </div>
                )
            })}
        </div>
    )
}

export default Member
