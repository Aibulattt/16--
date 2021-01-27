import React from 'react';

export default class AddComment extends React.Component {
    constructor(props) {
        super(props)
        const {addComment} = props;

        this.state = {
            inputValue: '',
            textareaValue: '',
            isActive: false
        }

    this.addComment = addComment.bind(this);
}

    checkInput() {
        const user = this.state.inputValue;
        const text = this.state.textareaValue;

        if (user === '' || text === ''){
            this.showMessage();
        }
        else {
            this.addComment(this.state.inputValue, this.state.textareaValue);
            alert('Комментарий добавлен')
        };
    }

    showMessage() {
        this.setState({isActive: true});
    }

    closeMessage() {
        this.setState({isActive: false});
    }


    render() {
        const className = this.state.isActive ? 'show-message' : 'hide-message';
        return (
                <div>
                    <form className='form'
                    onSubmit={() => {this.checkInput();return false}}
                    >
                        <div className={className}>
                            <h2>Error: The input field should not be empty</h2>
                            <button
                                onClick={(ev)=>{
                                    ev.preventDefault();
                                    this.closeMessage()
                                }}
                            >
                                Close
                            </button>
                        </div>
                        <label
                            className='form-label'
                            htmlFor='author'
                        >
                            Имя
                        </label>
                        <input
                            className='input'
                            placeholder='Имя'
                            id='author'
                            type='text'
                            value = {this.state.inputValue}
                            onChange={(ev) => {this.setState({inputValue: ev.target.value})}}
                        />
                        <label
                            className='form-label'
                            htmlFor='text'
                        >
                            Введите текст комментария
                        </label>
                        <textarea
                            className='input-text'
                            id='text'
                            onChange={(ev) => this.setState({textareaValue: ev.target.value})}
                            value = {this.state.textareaValue}
                        >
                         </textarea>
                        <button
                            className='btn-add'
                            type='submit'
                            // onClick={(ev) => {
                            //     // ev.preventDefault();
                            //     this.checkInput();
                            //     this.state.inputValue ='';this.state.textareaValue = '';
                            //     }
                            // }
                        >
                            Добавить комментарий
                        </button>
                    </form>
                </div>
        );
    }
}


