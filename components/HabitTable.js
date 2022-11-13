export default function HabitTable(props) {
    return (
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div>
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="">
                    <tr className="divide-x">
                      <th scope="col" className="py-3.5 pl-4 pr-4 text-sm font-semibold text-neutral-300 sm:pl-6">
                        Date
                      </th>
                      <th scope="col" className="px-4 py-3.5 text-sm font-semibold text-neutral-300">
                        Wake
                      </th>
                      <th scope="col" className="px-4 py-3.5 text-sm font-semibold text-neutral-300">
                        Reading
                      </th>
                      <th scope="col" className="px-4 py-3.5 text-sm font-semibold text-neutral-300">
                        Work out
                      </th>
                      <th scope="col" className="px-4 py-3.5 text-sm font-semibold text-neutral-300">
                        Writing
                      </th>
                      <th scope="col" className="py-3.5 pl-4 pr-4 text-sm font-semibold text-neutral-300 sm:pr-6">
                        School
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {props.children}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }