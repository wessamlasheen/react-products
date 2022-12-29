function Homecontent() {
  return (
    <form className="pt-5">
      <div className="input-group input-group-sm mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="User name"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
        />
      </div>
      <div className="input-group input-group-sm mb-3">
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
        />
      </div>
      <div>
        <input type="submit" value="submit" className="btn btn-danger w-100" />
      </div>
    </form>
  );
}
export default Homecontent;
