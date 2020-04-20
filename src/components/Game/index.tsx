import React, { useState } from 'react'
import { bindActionCreators, Dispatch } from "redux"
import {connect} from 'react-redux'
import * as actions from '../../store/gameReducer/actions'
import { IRootState, IRootActions } from '../../store/rootReducer'
import style from "./style.module.css"

const mapStateToProps = (state: IRootState) => {
    return {
        selectValue: state.game.selectValue
    }
}

const mapDispatchToProps = (dispatch: Dispatch<IRootActions>) =>  
    bindActionCreators(
        {
            setNumberValue: actions.setNumberValueAction,
            selectValueAction: actions.selectValueAction
        },
        dispatch
    )

    type GameProps = ReturnType<typeof mapStateToProps> &
    ReturnType<typeof mapDispatchToProps>;

const Game: React.FC<GameProps> = (props) => {
    const [value, setValue] = useState('')

    const checkValue = (e: React.KeyboardEvent) => {
        const enterValue = Number(e.key)
        if (!enterValue || (enterValue > 3 || enterValue < 1)) { 
            e.preventDefault();
            e.stopPropagation();
            return;
        } 
        props.selectValueAction(enterValue, props.selectValue);
        setValue('')
    }

    const clearValue = (e: React.FormEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    } 

    return (
      <div className={style.gameBlock}>
        <h1>Guess Number Game</h1>
        <p>Random Number (1,2,3)</p>
        <input
          type="text"
          onKeyDown={checkValue}
          value={value}
          onChange={clearValue}
        />
      </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Game));