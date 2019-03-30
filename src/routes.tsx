import React from "react";
import { Route } from "react-router";
import { Link } from "react-router-dom";
import { BstSorter } from "./bst/bstSorter";

import { BrowserRouter as Router } from "react-router-dom";
import { BalancedBrackets } from "./expressionParser/balancedBrackets";
import { InfixToPostFix } from "./expressionParser/infixToPostfix";
import { SampleGraph } from "./graph/sampleGraph";
import { AllPermutations } from "./recursion-backtracking/all-permutations";
import { StringCompress } from "./string-manipulation/string-compress";
import { NinetyPercentRotate } from "./matrix/ninety-percent-rotate";
import { PermOfNBraces } from "./recursion-backtracking/permutations-of-nbraces";
import { MergeSortedArray } from "./sort/merge-sorted-arrays";

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
                <li><Link to="/string-compress">String - compress</Link></li>
                <li><Link to="ninety-percent-rotate">ninety-percent-rotate</Link></li>
                <li><Link to="perm-of-n-braces">permutation of n braces</Link></li>
                <li><Link to="merge-sorted-array">Merge sorted array</Link></li>
            </ul>
        </div>
        <Route path="/bst-sorter" component={BstSorter} />
        <Route path="/balanced-brackets" component={BalancedBrackets} />
        <Route path="/infix-postfix" component={InfixToPostFix} />
        <Route path="/sample-graph" component={SampleGraph} />
        <Route path="/all-permutations" component={AllPermutations} />
        <Route path="/string-compress" component={StringCompress} />
        <Route path="/ninety-percent-rotate" component={NinetyPercentRotate} />
        <Route path="/perm-of-n-braces" component={PermOfNBraces} />
        <Route path="/merge-sorted-array" component={MergeSortedArray} />
    </Router>
    );
}