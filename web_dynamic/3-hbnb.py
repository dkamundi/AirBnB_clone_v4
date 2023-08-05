import uuid

@app.route('/3-hbnb/', strict_slashes=False)
def hbnb():
    """ HBNB is alive! """
    states = storage.all(State).values()
    states = sorted(states, key=lambda k: k.name)
    st_ct = []

    for state in states:
        st_ct.append([state, sorted(state.cities, key=lambda k: k.name)])

    amenities = storage.all(Amenity).values()
    amenities = sorted(amenities, key=lambda k: k.name)

    # Generate a unique cache_id using UUID
    cache_id = str(uuid.uuid4())

    return render_template('3-hbnb.html',
                           states=st_ct,
                           amenities=amenities,
                           cache_id=cache_id)

