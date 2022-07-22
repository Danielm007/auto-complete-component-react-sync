# Questions and Answers

## 1. What is the difference between Component and PureComponent? give an example where it might break my app.

We should use PureComponent if we want to optimize React Applications.
When you use Component if the parent component re-renders then the child component re-renders it self but using PureComponent child re-renders itself only if props passed to it changes, don't care if parent component re-renders.

Example:

In case you have one component that makes API request to get some data, and it's contained on a Parent Element, every time parent re-render child is going to do it, that means making API request everytime parent re-render and that's not ideal, you have to be careful or you can start an infinite loop that might break your app.

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

Objective of HOC is to receive a component as a prop and turn in into a more powerful components and some functionlity

- Redux (connect)
- Redux (compose)

## 7. What's the difference in handling exceptions in promises, callbacks and async...await.

To handle errors in promises we can use `.catch(e)` method and handle the error, using async and await we should wrap our async function with try and catch and handle the error in the `try{ }catch(e){}` block, when we use callback it's very common to receive an error parameter that we can handle `(error, response) => {}`.

## 8. How many arguments does setState take and why is it async.

Because it not modifies the state inmediately, so it's not a good practice to access the state inmediately after calling setState because it can possibly return the previous value.
The second argument is the callback function and it's going to be executed once the state has been modified so you can be sure the function is going to use the new state. Very similar to what can we do using Hooks with useEffect and state as dependecy.

## 9. List the steps needed to migrate a Class to Function Component.

- Change the class to function
- Remove render method
- Change all methods to functions and erase this references.
- We don't need constructors anymore so we can remove it, we can replace this.setState with useState
- Use useEffect instead of callbacks or lifecycle methods like componentDidUpdate, componentWillUnmount, etc

## 10. List a few ways styles can be used with components.

- Global styles in index.html
- CSS modules
- Inline Styles
- Using style property

## 11. How to render an HTML string coming from the server.

It's possible to use `dangerouslySetInnerHTML` but it's very dangerous so the best way to do it is to use RegExp (regular expressions) or the best way it's to find and use some libraries designed specifically for this like `react-html-parser`
