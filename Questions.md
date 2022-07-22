# Questions and Answers

## 1. What is the difference between Component and PureComponent? give an example where it might break my app.

We should use PureComponent if we want to optimize React Applications.
When you use Component if the parent component re-renders then the child component re-renders it self but using PureComponent child re-renders itself only if props passed to it changes, don't care if parent component re-renders.

## 2. Context + ShouldComponentUpdate might be dangerous. Can think of why is that?

It's dangerous because ShouldComponentUpdate can block Context propagation if props or state in a component haven't been modified in a meaningful way.

## 3. Describe 3 ways to pass information from a component to its PARENT.

Using a callback function and pass it to child as props, then the child is going to execute this function and pass data to its parent.
Using Redux: The parent is going to be the provider and everytime we want to modify some parent state(store) we can call an action.
Using native React functions like Context.

## 4. Give 2 ways to prevent components from re-rendering.

Using React Fragments
Using useMemo and useCallback
Replace useState with useRef

## 5. What is a fragment and why do we need it? Give an example where it might break my app.

Fragment is a component that allows us to group some elements without adding new Nodes to the DOM.
It only receive key as props

Example:

          const Table = () => {
            return(
              <table>
                <tr>
                  <Columns>
                </tr>
              </table>
            )
          }

          const Columns = () => {
            return(
              <div>
                <td>Hello</td>
                <td>World</td>
              </div>
            );
          }

Output is going to be:

          <table>
            <tr>
              <div>
                <td>Hello</td>
                <td>World</td>
              </div>
            </tr>
          </table>

But using Fragment:

          const Columns = () => {
            return(
              <div>
                <td>Hello</td>
                <td>World</td>
              </div>
            );
          }

Output is going to be:

          <table>
            <tr>
                <td>Hello</td>
                <td>World</td>
            </tr>
          </table>

Fragment can be helpful when you want to avoid some component to re-render

## 6. Give 3 examples of the HOC pattern.
