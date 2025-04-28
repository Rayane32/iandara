import style from './CaixaTextoCadastro.module.scss';

export function CaixaTextoCadastro({apelidoCaixa, hasAsterisco = true}){
    return(
        <div className={style.commentBox}>
            <p className={style.commentApelido}>
                {apelidoCaixa}{hasAsterisco && <span>*</span>}
            </p>
            <form>
                <textarea
                    
                />
            </form>
        </div>

    )
}