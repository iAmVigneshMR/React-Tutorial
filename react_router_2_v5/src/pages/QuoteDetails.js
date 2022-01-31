import React from 'react';
import { Route, useParams, useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import { Fragment } from 'react/cjs/react.production.min';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Max', text: 'Learning React is fun!' },
  { id: 'q2', author: 'Maximilian', text: 'Learning React is great!' },
];

const QuoteDetails = () => {
    const match = useRouteMatch();

    const params =useParams();

    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

    if(!quote){
        return <p>No Quote Found</p>
    }
  return (
  <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={match.path} exact>
        <div className='centered'>
          <Link className='btn--flat' to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`/quotes/${params.quoteId}/comments`}>
          <Comments />
      </Route>
  </Fragment>);
};

export default QuoteDetails;
