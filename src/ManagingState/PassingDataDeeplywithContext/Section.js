import { useContext } from 'react';
import { LevelContext } from "./LevelContext";

export default function Section({ children, isFancy }) {
    const level = useContext(LevelContext);
    return (
        <>
            <style>
                {
                    `
                  .section {
                    padding: 10px;
                    margin: 5px;
                    border-radius: 5px;
                    border: 1px solid #aaa;
                  }
                  
                  .fancy {
                    border: 4px dashed pink;
                  }
                  `
                }
            </style>
            <section className={
                'section ' +
                (isFancy ? 'fancy' : '')
            }>
                <LevelContext.Provider value={level + 1}>
                    {children}
                </LevelContext.Provider>
            </section>
        </>

    );
}