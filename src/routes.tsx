import React from "react";
import { Route } from "react-router";
import { Link } from "react-router-dom";
import { BstSorter } from "./bst/bstSorter";

import { BrowserRouter as Router } from "react-router-dom";
import { BalancedBrackets } from "./expressionParser/balancedBrackets";
import { InfixToPostFix } from "./expressionParser/infixToPostfix";
import { SampleGraph } from "./graph/sampleGraph";
import { AllPermutations } from "./string-manipulation/all-permutations";

export function Routes() {
    return (
    <Router>
        <div>
            <ul>
                <li><Link to="/bst-sorter">Binary Search Tree - Sort</Link></li>
                <li><Link to="/balanced-brackets">Balanced Brackets</Link></li>
                <li><Link to="/infix-postfix">Infix to Postfix</Link></li>
                <li><Link to="/sample-graph">Sample graph</Link></li>
                <li><Link to="/all-permutations">string - all permutations</Link></li>
            </ul>
        </div>
        <Route path="/bst-sorter" component={BstSorter} />
        <Route path="/balanced-brackets" component={BalancedBrackets} />
        <Route path="/infix-postfix" component={InfixToPostFix} />
        <Route path="/sample-graph" component={SampleGraph} />
        <Route path="/all-permutations" component={AllPermutations} />
    </Router>
    );
}