import Reactions from "./Reactions";
import Api from '../helpers/api'
import React from 'react';
import Summary from "./Summary";

class Mount extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            reactions: [],
            userContentReaction: [],
            contentId: this.props.contentId
        }
        this.api = new Api();


    }


    componentDidMount() {
        this.getReactions();
    }

    componentDidUpdate(prev) {
        if (prev.contentId !== this.props.contentId) {
            this.setState({
                contentId: this.props.contentId
            })
            this.getReactions();
        }
    }


    async getReactions() {

        let reactionsList = await this.api.getReactionsList();
        let userContentReaction = await this.api.getUserContentReaction();
        let users = await this.api.getUser().then((results) => {

            let userList = userContentReaction.data.map((elem) => {
                let user = results.data.find((result) => (elem.user_id === result.id));
                return { ...user, ...elem }
            })

            return userList.filter((user) => (user.content_id === this.state.contentId))
        })
        let sanitizedReactions = reactionsList.data.map(reaction => {
            let count = this.getCountByReactionsContentUser(reaction.id, userContentReaction);

            return {
                ...reaction,
                count
            }
        })

        this.setState({
            reactions: [...sanitizedReactions],
            userContentReaction: [...userContentReaction.data],
            userList: [...users]
        })
    }

    getCountByReactionsContentUser(id, elems) {
        let count = 0;
        for (let elem of elems.data) {
            if (elem.reaction_id == id && elem.content_id == this.state.contentId) count++;
        }

        return count;
    }



    handleClick(event) {
        let reaction = this.state.reactions.find(reaction => reaction.emoji.codePointAt(0).toString(16) == (event.target.innerHTML.trim().codePointAt(0).toString(16)))
        this.api.postReaction({
            "user_id": 2,
            "reaction_id": reaction.id,
            "content_id": this.state.contentId
        }).then(() => {
            reaction.selected = true
            reaction.count += 1
            this.setState({
                reactions: [...this.state.reactions]
            })
        })
    }

    handleRemove(event) {
        console.log('handle remove')
        let reaction = this.state.reactions.find(reaction => reaction.id == (event.target.id))
        if (reaction.selected) {
            reaction.selected = false
            reaction.count -= 1
            this.setState({
                reactions: [...this.state.reactions]
            })
        }

    }


    render() {

        if (this.state.reactions.length) {
            return (
                <div className="mount">
                    <Reactions reactions={this.state.reactions} handleClick={this.handleClick.bind(this)} handleRemove={this.handleRemove.bind(this)} />
                    <Summary reactions={this.state.reactions} users={this.state.userList} contentId={this.state.contentId} />
                </div>
            );
        } else {
            return (
                <div>
                    loading
                </div>
            )
        }

    }
};

export default Mount