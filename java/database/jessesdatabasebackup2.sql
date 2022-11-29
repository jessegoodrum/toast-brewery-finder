--
-- PostgreSQL database dump
--

-- Dumped from database version 14.4
-- Dumped by pg_dump version 14.3

-- Started on 2022-11-05 12:17:13 PDT

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 3612 (class 1262 OID 59721)
-- Name: final_capstone; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE final_capstone WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.UTF-8';


ALTER DATABASE final_capstone OWNER TO postgres;

\connect final_capstone

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 216 (class 1259 OID 59792)
-- Name: beers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.beers (
    beer_id integer NOT NULL,
    beer_img character varying(500),
    brewery_id integer NOT NULL,
    beer_name character varying(200),
    beer_abv numeric(2,1),
    beer_type character varying(60),
    beer_description character varying(200),
    beer_active boolean
);


ALTER TABLE public.beers OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 59791)
-- Name: beers_beer_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.beers_beer_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.beers_beer_id_seq OWNER TO postgres;

--
-- TOC entry 3613 (class 0 OID 0)
-- Dependencies: 215
-- Name: beers_beer_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.beers_beer_id_seq OWNED BY public.beers.beer_id;


--
-- TOC entry 218 (class 1259 OID 59799)
-- Name: beers_brewery; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.beers_brewery (
    beers_brewery_id integer NOT NULL,
    brewery_brewery_id integer NOT NULL
);


ALTER TABLE public.beers_brewery OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 59798)
-- Name: beers_brewery_brewery_brewery_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.beers_brewery_brewery_brewery_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.beers_brewery_brewery_brewery_id_seq OWNER TO postgres;

--
-- TOC entry 3614 (class 0 OID 0)
-- Dependencies: 217
-- Name: beers_brewery_brewery_brewery_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.beers_brewery_brewery_brewery_id_seq OWNED BY public.beers_brewery.brewery_brewery_id;


--
-- TOC entry 212 (class 1259 OID 59776)
-- Name: brewery; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.brewery (
    brewery_id integer NOT NULL,
    brewery_img character varying(500),
    brewery_hours character varying(200),
    brewery_history character varying(500),
    brewery_email character varying(100),
    beer_id integer,
    brewery_name character varying(200),
    brewery_phone character varying(10),
    brewery_website character varying(200),
    brewery_active boolean,
    brewery_address character varying(100),
    user_id integer
);


ALTER TABLE public.brewery OWNER TO postgres;

--
-- TOC entry 211 (class 1259 OID 59775)
-- Name: brewery_brewery_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.brewery_brewery_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.brewery_brewery_id_seq OWNER TO postgres;

--
-- TOC entry 3615 (class 0 OID 0)
-- Dependencies: 211
-- Name: brewery_brewery_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.brewery_brewery_id_seq OWNED BY public.brewery.brewery_id;


--
-- TOC entry 214 (class 1259 OID 59785)
-- Name: review; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.review (
    review_id integer NOT NULL,
    beer_id integer,
    review character varying(150),
    rating integer,
    user_id integer
);


ALTER TABLE public.review OWNER TO postgres;

--
-- TOC entry 213 (class 1259 OID 59784)
-- Name: review_review_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.review_review_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.review_review_id_seq OWNER TO postgres;

--
-- TOC entry 3616 (class 0 OID 0)
-- Dependencies: 213
-- Name: review_review_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.review_review_id_seq OWNED BY public.review.review_id;


--
-- TOC entry 209 (class 1259 OID 59722)
-- Name: seq_user_id; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.seq_user_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.seq_user_id OWNER TO postgres;

--
-- TOC entry 210 (class 1259 OID 59723)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    user_id integer DEFAULT nextval('public.seq_user_id'::regclass) NOT NULL,
    username character varying(50) NOT NULL,
    password_hash character varying(200) NOT NULL,
    role character varying(50) NOT NULL,
    review_id integer
);


ALTER TABLE public.users OWNER TO postgres;

--
-- TOC entry 3454 (class 2604 OID 59795)
-- Name: beers beer_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.beers ALTER COLUMN beer_id SET DEFAULT nextval('public.beers_beer_id_seq'::regclass);


--
-- TOC entry 3455 (class 2604 OID 59802)
-- Name: beers_brewery brewery_brewery_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.beers_brewery ALTER COLUMN brewery_brewery_id SET DEFAULT nextval('public.beers_brewery_brewery_brewery_id_seq'::regclass);


--
-- TOC entry 3452 (class 2604 OID 59779)
-- Name: brewery brewery_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.brewery ALTER COLUMN brewery_id SET DEFAULT nextval('public.brewery_brewery_id_seq'::regclass);


--
-- TOC entry 3453 (class 2604 OID 59788)
-- Name: review review_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.review ALTER COLUMN review_id SET DEFAULT nextval('public.review_review_id_seq'::regclass);


--
-- TOC entry 3467 (class 2606 OID 59807)
-- Name: beers_brewery beers_brewery_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.beers_brewery
    ADD CONSTRAINT beers_brewery_pkey PRIMARY KEY (beers_brewery_id);


--
-- TOC entry 3465 (class 2606 OID 59809)
-- Name: beers beers_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.beers
    ADD CONSTRAINT beers_pkey PRIMARY KEY (beer_id);


--
-- TOC entry 3459 (class 2606 OID 59783)
-- Name: brewery brewery_email; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.brewery
    ADD CONSTRAINT brewery_email UNIQUE (brewery_email);


--
-- TOC entry 3461 (class 2606 OID 59805)
-- Name: brewery brewery_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.brewery
    ADD CONSTRAINT brewery_pkey PRIMARY KEY (brewery_id);


--
-- TOC entry 3457 (class 2606 OID 59728)
-- Name: users pk_user; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT pk_user PRIMARY KEY (user_id);


--
-- TOC entry 3463 (class 2606 OID 59790)
-- Name: review review_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.review
    ADD CONSTRAINT review_pkey PRIMARY KEY (review_id);


--
-- TOC entry 3617 (class 0 OID 0)
-- Dependencies: 209
-- Name: SEQUENCE seq_user_id; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON SEQUENCE public.seq_user_id TO final_capstone_owner;
GRANT SELECT,USAGE ON SEQUENCE public.seq_user_id TO final_capstone_appuser;


--
-- TOC entry 3618 (class 0 OID 0)
-- Dependencies: 210
-- Name: TABLE users; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.users TO final_capstone_owner;
GRANT SELECT,INSERT,DELETE,UPDATE ON TABLE public.users TO final_capstone_appuser;


-- Completed on 2022-11-05 12:17:14 PDT

--
-- PostgreSQL database dump complete
--

