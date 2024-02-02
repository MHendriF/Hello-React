export default function NumResult({animes}) {
    return (
        <p className="search-results">
            Found <strong>{animes.length}</strong> results
        </p>
    );
}