import { useEffect, useState } from "react";
import MenuTabs from "./menuTabs";

import Table from 'react-tailwind-table';

const ClientView = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items));
    }, [items]);


    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('items'));
        if (items) {
            setItems(items);
        }
    }, []);




    return (
        <>



            <section className="flex flex-nowrap space-x-5 p-8 overflow-hidden   max-w-full min-h-screen h-auto">
                <div className="bg-transparent  my-4 px-2 w-full md:w-3/5 overflow-hidden sm:my-px sm:px-px md:my-4 md:px-4">

                    <MenuTabs className="min-w-full min-h-screen overflow-y-scroll overflow-x-hidden" cartItems={items} />

                </div>

                <div className="text-white my-4 w-full max-h-fit md:w-2/5  overflow-hidden sm:my-px  md:my-4 md:p-4">
                <div className="bg-red-700 text-white bg-opacity-75  rounded-xl shadow-md my-4 p-4 w-full max-h-fit ">

                    <h2 className="text-yellow-400 text-2xl my-2 font-bold" >Checkout</h2>
                    
                    <Table columns={[]} rows={[]} />
                    
                    <table className="table-auto">
                      <thead>
                        <tr>
                          <th><abbr title="Position">Pos</abbr></th>
                          <th>Team</th>
                          <th><abbr title="Played">Pld</abbr></th>
                        </tr>
                      </thead>
                      <tfoot>
                        <tr>
                          <th><abbr title="Position">Pos</abbr></th>
                          <th>Team</th>
                          <th><abbr title="Played">Pld</abbr></th>
                        </tr>
                      </tfoot>
                      <tbody>
                        <tr>
                          <th>1</th>
                          <td><a href="https://en.wikipedia.org/wiki/Leicester_City_F.C." title="Leicester City F.C.">Leicester City</a> <strong>(C)</strong>
                          </td>
                          <td>38</td>
                           </tr>
                        <tr>
                          <th>2</th>
                          <td><a href="https://en.wikipedia.org/wiki/Arsenal_F.C." title="Arsenal F.C.">Arsenal</a></td>
                          <td>38</td>
                          </tr>
                        <tr>
                          <th>3</th>
                          <td><a href="https://en.wikipedia.org/wiki/Tottenham_Hotspur_F.C." title="Tottenham Hotspur F.C.">Tottenham Hotspur</a></td>
                          <td>38</td>
                          </tr>
                        <tr className="is-selected">
                          <th>4</th>
                          <td><a href="https://en.wikipedia.org/wiki/Manchester_City_F.C." title="Manchester City F.C.">Manchester City</a></td>
                          <td>38</td> </tr>
                        <tr>
                          <th>5</th>
                          <td><a href="https://en.wikipedia.org/wiki/Manchester_United_F.C." title="Manchester United F.C.">Manchester United</a></td>
                          <td>38</td>
                        </tr>
                      </tbody>
                    </table>
                    </div>

                    <div  className="w-full bg-slate-100 rounded-lg p-4">
                        Total
                    </div>

                </div>
            </section>

        </>
    );
}

export default ClientView;